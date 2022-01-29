<script lang="ts">
  import SectionHeader from "../../shared/SectionHeader.svelte";

  export let params: DocsPageParams;
  export let entry = undefined;
</script>

<section id="docs-content-section" class="w-100">
  {#if entry}
    <h1 class="docs-title">class Package</h1>
    <p>Lorem ipsum or something.</p>
  {:else}
    <p class="w-100 text-center">
      No documentation is available for "{params.section}/{params.entry}" in
      version {params.version}
    </p>
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
  }
</style>
