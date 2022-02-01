/// <reference types="svelte" />

interface PackageData {
  description: string;
  repoLink: string;
  npmName: string;
  npmLink: string;
}

interface DocsPageParams {
  package: string;
  version: string;
  group: string;
  item: string;
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
  DocsSectionEnum |
  DocsSectionGeneral;

interface DocsSectionProperty {
  displayType: "property";
  prefix?: string;
  name: string;
  type: DocsTypeReference;
  description?: string;
  optional?: boolean;
}

interface DocsFunctionArguments {
  name: string;
  type: DocsTypeReference;
  description?: string;
  optional?: boolean;
  properties?: DocsFunctionArguments[];
}

interface DocsSectionFunction {
  displayType: "function";
  prefix?: string;
  name: string;
  description?: string;
  generics?: DocsTypeGeneric[];
  returnType?: DocsTypeReference;
  arguments?: DocsFunctionArguments[];
  examples?: {
    lang?: string;
    code: string;
  }[];
}

interface DocsSectionEnum {
  displayType: "enum";
  values: {
    key: string;
    value: string;
  }[];
}

interface DocsSectionGeneral {
  displayType: "general";
  paragraphs: string[];
}

interface DocsTypeReference {
  name: string;
  path?: {
    pkg: string;
    group: string;
    item: string;
  }
}

interface DocsTypeGeneric {
  name: string;
  extends?: DocsTypeReference[];
}
