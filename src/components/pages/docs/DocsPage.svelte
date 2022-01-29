<script lang="ts">
  import DocsBanner from "./DocsBanner.svelte";
  import documentation from "../../../data/documentation.json";
  import { link, replace } from "svelte-spa-router";
  import BlurOverlay from "../../shared/BlurOverlay.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import ContentArea from "../../shared/ContentArea.svelte";
  import DocsIndex from "./DocsIndex.svelte";
  import SplitView from "../../shared/SplitView.svelte";

  export let params: { [key: string]: any } = {};

  let isError = false;
  let showErrorOverlay = false;
  let packageData: PackageData;
  let indexData: DocsIndexData;

  function fetchDocsIndex() {
    return new Promise((resolve) => {
      fetch(packageData.indexLink)
        .then((response) => response.json())
        .then((jsonData) => {
          resolve(jsonData);
        })
        .catch(() => {
          showErrorOverlay = true;
          setTimeout(() => {
            isError = true;
          }, 200);
        });
    });
  }

  $: {
    if (params.package in documentation) {
      packageData = documentation[params.package];
      fetchDocsIndex()
        .then((data) => {
          indexData = data as DocsIndexData;
        })
        .catch((err) => {
          console.error(err);
        });
    } else {
      replace("/page-not-found");
    }
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
  {:else if indexData}
    <ContentArea>
      <SplitView>
        <div slot="left">
          <DocsIndex {indexData} />
        </div>
        <div slot="right">
          <p>Hi</p>
        </div>
      </SplitView>
    </ContentArea>
  {:else if !showErrorOverlay}
    <ContentArea>
      <div class="flex-center w-100">
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
  }
</style>
