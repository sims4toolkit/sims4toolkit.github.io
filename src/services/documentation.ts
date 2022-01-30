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
 * @param packageName Name of package to get doc for
 * @param section Section to look in to get doc
 * @param entry Entry to get doc for
 */
export function getDocumentation(
  packageName: string,
  section: string,
  entry: string
): Promise<any> {
  return new Promise((resolve, reject) => {
    console.log("Getting docs"); // FIXME: delete
    const url = `https://raw.githubusercontent.com/sims4toolkit/documentation/main/${packageName}/index.json`;

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
