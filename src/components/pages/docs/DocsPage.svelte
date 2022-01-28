<script lang="ts">
  import DocsBanner from "./DocsBanner.svelte";
  import documentation from "../../../data/documentation.json";
  import { link, replace } from "svelte-spa-router";
  import BlurOverlay from "../../shared/BlurOverlay.svelte";

  export let params: { [key: string]: any } = {};
  let showErrorOverlay = false;

  interface PackageData {
    description?: string;
  }

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
      });

    if (params.package in documentation) {
      packageData = documentation[params.package];
    } else {
      replace("/page-not-found");
    }
  }
</script>

<section id="docs-page">
  <DocsBanner
    title={packageData.description}
    npmLink="https://npmjs.com/package/@s4tk/{params.package}"
    npmInstallText="npm i @s4tk/{params.package}"
    githubLink="https://github.com/sims4toolkit/{params.package}"
  />
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
