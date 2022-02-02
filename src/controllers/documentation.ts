import documentationData from "../data/documentation.json";
import clone from "just-clone";

/**
 * Handles fetching of documentation indices and content.
 */
export default class DocumentationController {
  private _params: Partial<DocsPageParams>;
  private _index?: DocsIndexData;
  private _content?: DocsContentData;

  constructor() {
    // just so keys exist
    this._params = {
      package: undefined,
      version: undefined,
      group: undefined,
      item: undefined
    };
  }

  /**
   * Returns the index for the package with the given name. Request is rejected
   * if the package isn't registered (i.e. in the "documentation.json" file) or
   * if the main branch of its repo does not have a file called "index.json" in
   * a "docs" folder at the highest level.
   * 
   * @param params Params to get index for
   */
  requestIndex(params: Partial<DocsPageParams>): Promise<DocsIndexData> {
    return new Promise(async (resolve, reject) => {
      if (!(params.package in documentationData)) {
        this._reset();
        return reject(`Package "${params.package}" is not registered.`);
      }

      if (!(this._index && (params.package === this._params.package))) {
        this._params = clone(params);

        try {
          this._index = await DocumentationController._fetchIndex(params.package);
        } catch (msg) {
          this._reset();
          return reject(msg);
        }
      }

      resolve(this._index);
    });
  }

  /**
   * Returns the path to redirect to if the given params are incomplete. If the
   * params are already complete and no redirect is necessary, null is returned.
   * This must be called AFTER the index has been loaded, or else the request
   * will be rejected.
   * 
   * @param params Object containing params to resolve
   */
  resolveParams(params: Partial<DocsPageParams>): Promise<string> {
    return new Promise(async (resolve, reject) => {
      if (!(this._index && (params.package === this._params.package))) {
        return reject("Must find index before resolving params.");
      }

      const versionIsValid = params.version && this._index.versions.includes(params.version);
  
      if (versionIsValid && this._paramsAreSameAndComplete(params)) {
        return resolve(null);
      }
      
      delete this._content;

      // ensure that version is specified, if not, then get the latest
      if (versionIsValid) {
        this._params.version = params.version;
      } else {
        this._params.version = this._index.versions[0];
      }

      // ensure that group and item are specified
      this._params.group = params.group ?? this._index.groups[0].name;
      this._params.item = params.item ?? this._index.groups[0].items[0];

      // perform redirect
      const pkg = this._params.package; // package is reserved word
      const { version, group, item } = this._params;
      resolve(`/docs/${pkg}/${version}/${group}/${item}`);
    });
  }

  /**
   * Returns the documentation content for the given params. Request is rejected
   * if the index hasn't been loaded yet, if the path is not resolved, or if the
   * documentation could not be found.
   * 
   * @param params Params to get documentation for
   */
  requestContent(params: DocsPageParams): Promise<DocsContentData> {
    return new Promise(async (resolve, reject) => {
      if (!(this._index && (params.package === this._params.package))) {
        return reject("Must find index before requesting docs content.");
      } else if (!this._paramsAreSameAndComplete(params)) {
        if (this._params.package === params.package && this._params.version === params.version) {
          this._params.group = params.group;
          this._params.item = params.item;
          delete this._content
        } else {
          return reject("Must resolve params before requesting docs content.");
        }
      }

      if (!this._content) {
        try {
          this._content = await DocumentationController._fetchContent(params);
        } catch (msg) {
          return reject(msg);
        }
      }

      resolve(this._content);
    });
  }

  private _paramsAreSameAndComplete(params: Partial<DocsPageParams>): boolean {
    return Object.keys(this._params).every((name: string) => {      
      // checking params[name] ensures that path is also complete
      return params[name] && (params[name] === this._params[name]);
    });
  }

  private _reset() {
    this._params = {};
    delete this._index;
    delete this._content;
  }

  private static _fetchIndex(packageName: string): Promise<DocsIndexData> {
    return new Promise((resolve, reject) => {
      const url = `https://raw.githubusercontent.com/sims4toolkit/${packageName}/main/docs/index.json`;

      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          resolve(jsonData);
        })
        .catch(() => {
          reject(`Index could not be found for package "${packageName}".`);
        });
    });
  }

  private static _fetchContent(params: DocsPageParams): Promise<DocsContentData> {
    return new Promise((resolve, reject) => {
      const pkg = params.package; // "package" is reserved word in JS
      const { version, group, item } = params;
      const formattedVersion = version.replace(/\./g, "-");

      const url = `https://raw.githubusercontent.com/sims4toolkit/${pkg}/version/${formattedVersion}/docs/${group}/${item}.json`;
      
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          resolve(jsonData);
        })
        .catch(() => {
          reject(`Documentation content could not be found for "${pkg}/${formattedVersion}/${group}/${item}".`);
        });
    });
  }
}
