import { replace } from "svelte-spa-router";

/**
 * Sets the route to the docs page with the given params.
 * 
 * @param pkg Package for route
 * @param activeDocs Object with version, group, and item to use
 */
export function setDocsPageRoute(pkg: string, { version, group, item }: ActiveDocs) {
  replace(
    `/docs/${pkg}/${version}/${group}/${item}`
  );
}
