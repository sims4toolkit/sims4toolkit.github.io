<script lang="ts">
  import DocsBanner from "./DocsBanner.svelte";
  import documentation from "../../../data/documentation.json";
  import { onMount } from "svelte";
  import { replace } from "svelte-spa-router";

  export let params: { [key: string]: any } = {};

  interface PackageData {
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
    npmLink="https://npmjs.com/package/@s4tk/{params.package}"
    npmInstallText="npm i @s4tk/{params.package}"
    githubLink="https://github.com/sims4toolkit/{params.package}"
  />
</section>

<style lang="scss">
  section#docs-page {
    min-height: 100vh;
  }
</style>
