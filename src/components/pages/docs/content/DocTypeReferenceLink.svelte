<script lang="ts">
  import { getContext } from "svelte";

  export let typeRef: DocsTypeReference;

  const context: any = getContext("docs");

  function goToType() {
    context.requestNewDocs({
      package: typeRef.path.pkg,
      group: typeRef.path.group,
      item: typeRef.path.item,
    });
  }
</script>

{#if typeRef.path}
  <span class="type-ref" on:click={goToType}>{typeRef.name}</span>
{:else}
  {typeRef.name}
{/if}

<style lang="scss">
  span.type-ref {
    color: var(--color-accent-secondary);
    text-decoration: underline;

    &:hover {
      text-decoration: none;
      cursor: pointer;
    }
  }
</style>
