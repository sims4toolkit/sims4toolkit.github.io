/// <reference types="svelte" />

interface PackageData {
  description: string;
  repoLink: string;
  npmName: string;
  npmLink: string;
  indexLink: string;
}

type DocsIndexData = {
  title: string;
  entries: string[];
}[];

interface DocsPageParams {
  package: string;
  version: string;
  section: string;
  entry: string;
}
