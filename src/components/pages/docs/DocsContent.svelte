<script lang="ts">
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import { getDocumentation } from "../../../services/documentation";
  import { link } from "svelte-spa-router";

  export let pkg: string;
  export let activeDocs: ActiveDocs;

  let docsData: DocsContentData;
  let isError = false;

  $: {
    activeDocs;

    getDocumentation(pkg, activeDocs)
      .then((docs) => {
        docsData = docs;
        isError = false; // FIXME: needed?
      })
      .catch(() => {
        isError = true;
      });
  }
</script>

<section id="docs-content-section" class="w-100">
  {#if docsData}
    <h1 class="docs-title">class Package</h1>
    <p>{docsData}</p>
  {:else if isError}
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
  {:else}
    <div class="flex-center w-100 loading-text">
      <h1>Loading...</h1>
    </div>
  {/if}
</section>

<style lang="scss">
  section#docs-content-section {
    background-color: var(--color-bg-secondary);
    border-radius: 0.5em;
    padding: 1em;

    .docs-title {
      color: var(--color-accent);
      margin-top: 0;
    }

    .loading-text {
      opacity: 0.25;
    }
  }
</style>
