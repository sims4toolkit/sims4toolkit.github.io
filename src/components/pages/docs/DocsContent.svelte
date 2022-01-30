<script lang="ts">
  import { getDocumentation } from "../../../services/documentation";
  import { link } from "svelte-spa-router";
  import DocsContentHeader from "./content/DocsContentHeader.svelte";

  export let pkg: string;
  export let activeDocs: ActiveDocs;

  let docsData: DocsContentData;
  let isError = false;

  $: {
    activeDocs;

    getDocumentation(pkg, activeDocs)
      .then((docs) => {
        docsData = docs;
        isError = false;
      })
      .catch(() => {
        isError = true;
      });
  }
</script>

<section id="docs-content-section" class="w-100">
  {#if isError}
    <p class="w-100">
      Something went wrong while fetching the documentation for "{activeDocs.group}/{activeDocs.item}".
      This is either due to this resource not existing in the selected version ({activeDocs.version}),
      or an internal error.
    </p>
    <p class="w-100">
      Try switching to the latest version, and if you are still seeing this
      error, please <a href="/help" use:link>let me know</a>.
    </p>
    <p class="disclaimer">Error 404</p>
  {:else if docsData}
    <DocsContentHeader header={docsData.header} />
    <p>{docsData}</p>
  {:else}
    <div class="flex-center w-100 loading-text">
      <h1>Loading...</h1>
    </div>
  {/if}
</section>

<style lang="scss">
  section#docs-content-section {
    background-color: var(--color-bg-secondary);
    border-radius: 8px;
    padding: 16px;

    .loading-text {
      opacity: 0.25;
    }
  }
</style>
