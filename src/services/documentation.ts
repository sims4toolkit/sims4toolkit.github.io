import documentationData from "../data/documentation.json";

/**
 * Returns a promise that resolves with the data required to populate the index
 * for a package's docs.
 * 
 * @param packageName Name of package to get doc index for
 */
export function getDocumentationIndex(packageName: string): Promise<DocsIndexData> {
  return new Promise((resolve, reject) => {
    fetch(documentationData[packageName].indexLink)
      .then((response) => response.json())
      .then((jsonData) => {
        resolve(jsonData);
      })
      .catch((err) => {
        reject(err);
      });
  });
}