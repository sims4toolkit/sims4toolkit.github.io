<script lang="ts">
  import { getContext } from "svelte";
  import { link } from "svelte-spa-router";

  export let typeRef: DocsTypeReference;

  const context: any = getContext("docs");

  function getUrlToExternalRef({ pkg, group, item }): string {
    return `/docs/${pkg}/latest/${group}/${item}`;
  }

  function goToRefInSamePackage({ group, item }) {
    context.redirect({ group, item });
    context.scrollToTop();
  }
</script>

{#if typeRef.path}
  {#if context.inPackage(typeRef.path.pkg)}
    <span class="type-ref" on:click={() => goToRefInSamePackage(typeRef.path)}>
      {typeRef.name}
    </span>
  {:else}
    <a href={getUrlToExternalRef(typeRef.path)} use:link>{typeRef.name}</a>
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
