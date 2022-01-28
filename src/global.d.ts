/// <reference types="svelte" />

interface PackageData {
  description: string;
  repoLink: string;
  npmName: string;
  npmLink: string;
  indexLink: string;
}

interface DocsIndexEntry {
  type: string;
  name: string;
  url: string;
}

interface DocsIndexData {
  sections: {
    title: string;
    entries: DocsIndexEntry[];
  }[];
}
