<script lang="ts">
  import DocsContentSeparator from "./DocsContentSeparator.svelte";
  import DocTypeReferenceLink from "./DocTypeReferenceLink.svelte";

  export let footer: DocsFooter;
</script>

<div class="smaller-font">
  <DocsContentSeparator />
  {#if footer.seeAlso?.length}
    See also:
    {#each footer.seeAlso as typeRef, key (key)}
      {#if key !== 0}
        |
      {/if}
      <DocTypeReferenceLink {typeRef} />
    {/each}
  {/if}
</div>

<style lang="scss">
  // intentionally blank
</style>
