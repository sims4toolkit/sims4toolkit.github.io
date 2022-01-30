/// <reference types="svelte" />

interface PackageData {
  description: string;
  repoLink: string;
  npmName: string;
  npmLink: string;
}

interface ActiveDocs {
  version: string;
  group: string;
  item: string;
}

interface DocsPageParams extends ActiveDocs {
  package: string;
}

interface DocsIndexData {
  versions: string[];
  groups: {
    name: string;
    items: string[];
  }[];
};

interface DocsContentData {
  imports?: string[];
  header: DocsHeader;
  sections: DocsSection[];
  footer?: DocsFooter;
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

interface DocsFooter {
  seeAlso?: DocsTypeReference[];
}

interface DocsSection {
  title?: string;
  description?: string;
  content: DocsSectionContent[];
}

type DocsSectionContent =
  DocsSectionProperty |
  DocsSectionFunction |
  DocsSectionEnum;

interface DocsSectionProperty {
  displayType: "property";
  prefix?: string;
  name: string;
  type: DocsTypeReference;
  description?: string;
  optional?: boolean;
}

interface DocsSectionFunction {
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

interface DocsSectionEnum {
  displayType: "enum";
  values: {
    key: string;
    value: string;
  }[];
}

interface DocsTypeReference {
  // FIXME: this should be more general
  name: string;
  path?: string;
}

interface DocsTypeGeneric {
  name: string;
  extends?: DocsTypeReference[];
}
