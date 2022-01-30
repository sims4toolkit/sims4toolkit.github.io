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
        reject(err);
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
export function getDocumentation(pkg: string, { version, group, item }: ActiveDocs): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log("Getting docs"); // FIXME: delete
    const url = `https://github.com/sims4toolkit/${pkg}/blob/version/${version.replace('.', '-')}/docs/${group}/${item}.json`;

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
