import { replace } from "svelte-spa-router";

/**
 * Sets the route to the docs page with the given params.
 * 
 * @param params Params to replace in route
 */
export function setDocsPageRoute(params: DocsPageParams) {
  replace(
    `/docs/${params.package}/${params.version}/${params.group}/${params.item}`
  );
}
