<script lang="ts">
  import DocsBanner from "./DocsBanner.svelte";
  import documentation from "../../../data/documentation.json";
  import { link, replace } from "svelte-spa-router";
  import BlurOverlay from "../../shared/BlurOverlay.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import ContentArea from "../../shared/ContentArea.svelte";

  export let params: { [key: string]: any } = {};

  let isError = false;
  let showErrorOverlay = false;
  let packageData: PackageData = {};

  $: {
    const url = `https://raw.githubusercontent.com/sims4toolkit/documentation/main/${params.package}/index.json`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Prints result from `response.json()` in getRequest
      })
      .catch((error) => {
        console.error(error);
        showErrorOverlay = true;
        setTimeout(() => {
          isError = true;
        }, 200);
      });

    if (params.package in documentation) {
      packageData = documentation[params.package];
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
        <SectionHeader title="Unlock these docs for $4.99" />
        <p>
          Just kidding. This documentation couldn't be found. Please try
          refreshing the page, and <a href="/help" use:link>let me know</a> if the
          error persists.
        </p>
        <p>
          For the time being, feel free to browse the project
          <a href={packageData.repoLink}>on GitHub</a>.
        </p>
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
