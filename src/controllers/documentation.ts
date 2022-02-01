import { replace } from "svelte-spa-router";
import documentationData from "../data/documentation.json";

interface DocumentationResponse {
  isRedirect: boolean;
  index?: DocsIndexData;
  content?: DocsContentData; 
}

export default class DocumentationController {
  private _params: Partial<DocsPageParams>;
  private _index?: DocsIndexData;
  private _content?: DocsContentData;

  constructor() {
    this._params = {};
  }

  async requestDocumentation(params: Partial<DocsPageParams>): Promise<DocumentationResponse> {
    return new Promise(async (resolve, reject) => {
      // if docs exist, return them
      if (this._alreadyHasDocs(params)) {
        return resolve({
          isRedirect: false,
          index: this._index,
          content: this._content
        });
      }

      // ensure package exists
      if (!(params.package && (params.package in documentationData))) {
        return reject(`Could not identify package "${params.package}".`);
      }

      // ensure index exists for package
      if ((!this._index) || (params.package !== this._params.package)) {
        try {
          this._params.package = params.package;
          this._index = await this._fetchIndex();
        } catch (msg) {
          this._reset();
          return reject(msg);
        }
      }

      let isRedirect = false;

      // ensure that version is specified, if not, then it's the latest
      if (params.version && this._index.versions.includes(params.version)) {
        this._params.version = params.version;
      } else {
        this._params.version = this._index.versions[0];
        isRedirect = true;
      }

      // update group and item
      if (!(params.group && params.item)) isRedirect = true;
      this._params.group = params.group ?? this._index.groups[0].name;
      this._params.item = params.item ?? this._index.groups[0].items[0];

      // get docs content and resolve/reject
      try {
        this._content = await this._fetchContent();

        resolve({
          isRedirect,
          index: this._index,
          content: this._content
        });

        replace(`/docs/${this._params.package}/${this._params.version}/${this._params.group}/${this._params.item}`);
      } catch (msg) {
        reject(msg);
      }
    });
  }

  private _reset() {
    this._params = {};
    delete this._index;
    delete this._content;
  }

  private _alreadyHasDocs(params: Partial<DocsPageParams>): boolean {
    return (
      this._index &&
      this._content &&
      this._params &&
      (this._params.package === params.package) &&
      (this._params.version === params.version) &&
      (this._params.group === params.group) &&
      (this._params.item === params.item)
    );
  }

  private async _fetchIndex(): Promise<DocsIndexData> {
    return new Promise((resolve, reject) => {
      const url = `https://raw.githubusercontent.com/sims4toolkit/${this._params.package}/main/docs/index.json`;

      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          resolve(jsonData);
        })
        .catch(() => {
          reject(`Index could not be found for package "${this._params.package}".`);
        });
    });
  }

  private async _fetchContent(): Promise<DocsContentData> {
    return new Promise((resolve, reject) => {
      const url = `https://raw.githubusercontent.com/sims4toolkit/${this._params.package}/version/${this._params.version.replace(/\./g, "-")}/docs/${this._params.group}/${this._params.item}.json`;
      
      fetch(url)
        .then((response) => response.json())
        .then((jsonData) => {
          resolve(jsonData);
        })
        .catch(() => {
          reject(`Documentation content could not be found for package "${this._params.package}".`);
        });
    });
  }
}
