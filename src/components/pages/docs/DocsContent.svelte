<script lang="ts">
  import { link } from "svelte-spa-router";
  import DocsContentHeader from "./content/DocsContentHeader.svelte";
  import DocsContentImports from "./content/DocsContentImports.svelte";
  import DocsContentSeparator from "./content/DocsContentSeparator.svelte";
  import DocsContentSection from "./content/DocsContentSection.svelte";
  import DocsContentFooter from "./content/DocsContentFooter.svelte";

  export let params: DocsPageParams;

  let docsData: DocsContentData;
  let isError = true; // FIXME:
</script>

<section id="docs-content-section" class="w-100">
  {#if isError}
    <div class="docs-content-body">
      <p class="w-100">
        Something went wrong while fetching the documentation for "{params.group}/{params.item}".
        This is either due to this resource not existing in the selected version
        ({params.version}), or an internal error.
      </p>
      <p class="w-100">
        Try switching to the latest version, and if you are still seeing this
        error, please <a href="/help" use:link>let me know</a>.
      </p>
      <p class="disclaimer">Error 404</p>
    </div>
  {:else if docsData}
    {#if docsData.imports?.length}
      <DocsContentImports imports={docsData.imports} />
    {/if}
    <div class="docs-content-body">
      <DocsContentHeader header={docsData.header} />
      {#each docsData.sections as section, key (key)}
        <DocsContentSeparator />
        <DocsContentSection {section} />
      {/each}
      {#if docsData.footer}
        <DocsContentFooter footer={docsData.footer} />
      {/if}
    </div>
  {:else}
    <div class="docs-content-body">
      <div class="flex-center w-100 loading-text">
        <h1>Loading...</h1>
      </div>
    </div>
  {/if}
</section>

<style lang="scss">
  section#docs-content-section {
    .docs-content-body {
      background-color: var(--color-bg-secondary);
      border-radius: 8px;
      padding: 20px;
    }

    .loading-text {
      opacity: 0.25;
    }
  }
</style>
