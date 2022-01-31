<script lang="ts">
  import { getContext } from "svelte";
  import { link } from "svelte-spa-router";

  export let typeRef: DocsTypeReference;

  const context: any = getContext("docs");

  function getUrlToExternalRef(): string {
    return `/docs/${typeRef.path.pkg}/latest/${typeRef.path.group}/${typeRef.path.item}`;
  }

  function goToRefInSamePackage() {
    context.requestNewDocs({
      group: typeRef.path.group,
      item: typeRef.path.item,
    });
  }
</script>

{#if typeRef.path}
  {#if typeRef.path.pkg === context.currentPackage}
    <span class="type-ref" on:click={goToRefInSamePackage}>{typeRef.name}</span>
  {:else}
    <a href={getUrlToExternalRef()} use:link>{typeRef.name}</a>
  {/if}
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
