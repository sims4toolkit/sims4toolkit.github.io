<script lang="ts">
  import DocsBanner from "./DocsBanner.svelte";
  import documentation from "../../../data/documentation.json";
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";

  export let params: { [key: string]: any } = {};

  interface PackageData {
    repo?: string;
    npmLink?: string;
    npmPackageName?: string;
    description?: string;
  }

  let packageData: PackageData = {};

  onMount(() => {
    if (params.package in documentation) {
      packageData = documentation[params.package];
    } else {
      replace("/page-not-found");
    }
  });
</script>

<section id="docs-page">
  <DocsBanner
    title={packageData.description}
    npmLink={packageData.npmLink}
    npmInstallText="npm i {packageData.npmPackageName}"
  />
</section>

<style lang="scss">
  section#docs-page {
    padding-bottom: 1em;
  }
</style>
