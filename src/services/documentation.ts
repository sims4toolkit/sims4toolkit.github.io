/**
 * Returns a promise that resolves with the data required to populate the index
 * for a package's docs.
 * 
 * @param packageName Name of package to get doc index for
 */
export function getDocumentationIndex(packageName: string): Promise<DocsIndexData> {
  const url = `https://raw.githubusercontent.com/sims4toolkit/${packageName}/main/docs/index.json`;

  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        resolve(jsonData);
      })
      .catch((err) => {
        reject("Index could not be found. Are you sure it exists in the main branch's 'docs' folder?");
      });
  });
}

/**
 * Returns a promise that resolves with the data required to populate the
 * content for an entry's docs.
 * 
 * @param pkg Package to get docs for
 * @param activeDocs Object with version, group, and item to use
 */
export function getDocumentation(params: DocsPageParams): Promise<any> {
  return new Promise((resolve, reject) => {
    if (params.version === "latest") {
      reject("Latest version must be specified. It can be found in the docs index.");
      return;
    }

    const url = `https://raw.githubusercontent.com/sims4toolkit/${params.package}/version/${params.version.replace(/\./g, "-")}/docs/${params.group}/${params.item}.json`;
    
    fetch(url)
      .then((response) => response.json())
      .then((jsonData) => {
        resolve(jsonData);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
