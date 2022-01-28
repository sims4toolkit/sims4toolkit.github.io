<script lang="ts">
  import { link, location } from "svelte-spa-router";
  import documentation from "../../../data/documentation.json";
  import FloatingCard from "../../shared/FloatingCard.svelte";
</script>

<section id="docs-landing-page">
  {#each Object.entries(documentation) as [path, props], key (key)}
    <FloatingCard>
      <div class="package-entry" slot="left">
        <a href="/docs/{path}" use:link>{props.npmPackageName}</a>
      </div>
    </FloatingCard>
  {/each}
</section>

<style lang="scss">
  section#docs-landing-page {
    padding: 5em;
  }
</style>
