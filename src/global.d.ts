/// <reference types="svelte" />

interface PackageData {
  description: string;
  repoLink: string;
  npmName: string;
  npmLink: string;
  indexLink: string;
}

interface DocsPageParams {
  package: string;
  version: string;
  section: string;
  entry: string;
}

interface DocsIndexData {
  versions: string[];
  groups: {
    group: string;
    items: string[];
  }[];
};

interface DocsContentData {
  imports?: string[];
  header: DocsHeader;
  sections: DocsSection[];
  seeAlso?: DocsTypeReference[];
}

interface DocsHeader {
  description: string;
  repoUrl?: string;
  title?: {
    prefix?: string;
    name: string;
    extends?: DocsTypeReference[];
    implements?: DocsTypeReference[];
    generics?: DocsTypeGeneric[];
  }
}

interface DocsSection {
  title?: string;
  description?: string;
  content: DocsSectionContent[];
}

interface DocsSectionContent {
  displayType: "property" | "function" | "enum";
}

interface DocsSectionProperty extends DocsSectionContent {
  displayType: "property";
  prefix?: string;
  name: string;
  type: DocsTypeReference;
  description?: string;
  optional?: boolean;
}

interface DocsSectionFunction extends DocsSectionContent {
  displayType: "function";
  prefix?: string;
  name: string;
  generics?: DocsTypeGeneric[];
  returnType?: DocsTypeReference;
  description?: string;
  arguments?: {
    name: string;
    type: DocsTypeReference;
    description?: string;
    optional?: boolean;
  }[];
  exampleCode?: string;
}

interface DocsSectionEnum extends DocsSectionContent {
  displayType: "enum";
  values: {
    key: string;
    value: string;
  }[];
}

interface DocsTypeReference {
  name: string;
  path?: string;
}

interface DocsTypeGeneric {
  name: string;
  extends?: DocsTypeReference[];
}
