<script lang="ts">
  import DocsBanner from "./DocsBanner.svelte";
  import documentation from "../../../data/documentation.json";
  import { link, replace } from "svelte-spa-router";
  import BlurOverlay from "../../shared/BlurOverlay.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import ContentArea from "../../shared/ContentArea.svelte";
  import DocsIndex from "./DocsIndex.svelte";
  import SplitView from "../../shared/SplitView.svelte";
  import DocsContent from "./DocsContent.svelte";
  import { getDocumentationIndex } from "../../../services/documentation";
  import { setDocsPageRoute } from "../../../services/routing";
  import { setContext } from "svelte";

  export let params: DocsPageParams;

  let isError = false;
  let showErrorOverlay = false;
  let packageData: PackageData;
  let indexData: DocsIndexData;

  $: docsReady = indexData && params.version && params.group && params.item;

  setContext("docs", {
    currentPackage: params.package,
    requestNewDocs: (newParams: Partial<DocsPageParams>) => {
      for (const paramName in newParams) {
        params[paramName] = newParams[paramName];
      }

      setDocsPageRoute(params);
    },
  });

  async function loadIndex() {
    if (params.package in documentation) {
      packageData = documentation[params.package];
      getDocumentationIndex(params.package)
        .then((data) => {
          indexData = data as DocsIndexData;

          const getLatestVersion = params.version === "latest";

          if (!params.version || !params.group || !params.item) {
            if (getLatestVersion || !params.version)
              params.version = indexData.versions[0];
            params.group ??= indexData.groups[0].name;
            params.item ??= indexData.groups[0].items[0];
            setDocsPageRoute(params);
          }
        })
        .catch(() => {
          showErrorOverlay = true;
          setTimeout(() => {
            isError = true;
          }, 200);
        });
    } else {
      replace("/page-not-found");
    }
  }

  $: {
    params.package;
    loadIndex();
  }
</script>

<section id="docs-page">
  <DocsBanner {packageData} />
  {#if isError}
    <ContentArea>
      <div class="fadein">
        <SectionHeader title="Unlock these docs for $4.04" />
        <p>
          Just kidding. This documentation couldn't be found. Please try
          refreshing the page, and <a href="/help" use:link>let me know</a> if the
          error persists.
        </p>
        <p>
          For the time being, feel free to browse the project
          <a href={packageData.repoLink} target="_blank">on GitHub</a>.
        </p>
      </div>
    </ContentArea>
  {:else if docsReady}
    <ContentArea>
      <SplitView centerV={false} rightFill={true}>
        <div slot="left">
          <DocsIndex {indexData} bind:params />
        </div>
        <div slot="right">
          <DocsContent bind:params />
        </div>
      </SplitView>
    </ContentArea>
  {:else if !showErrorOverlay}
    <ContentArea>
      <div class="flex-center w-100 loading-text">
        <h1>Loading...</h1>
      </div>
    </ContentArea>
  {/if}
</section>
{#if showErrorOverlay}
  <BlurOverlay>
    <div slot="content">
      <h2>Oops...</h2>
      <p>
        Something went wrong, and the documentation for @s4tk/{params.package}
        could not be found. Please try refreshing the page, and if the error persists,
        <a href="/help" use:link>let me know</a>.
      </p>
    </div>
    <div slot="actions">
      <span class="button" on:click={() => (showErrorOverlay = false)}>
        Dismiss
      </span>
      <a class="button" href="/docs" use:link>Back to Docs</a>
    </div>
  </BlurOverlay>
{/if}

<style lang="scss">
  section#docs-page {
    min-height: 100vh;

    .loading-text {
      opacity: 0.1;
    }
  }
</style>
