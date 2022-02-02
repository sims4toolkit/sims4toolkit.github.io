<script lang="ts">
  import { getContext } from "svelte";
  import { link } from "svelte-spa-router";

  export let typeRef: DocsTypeReference;

  const context: any = getContext("docs");
</script>

{#if typeRef.path}
  <a href={context.getHrefForPath(typeRef.path)}>{typeRef.name}</a>
{:else}
  {typeRef.name}
{/if}

<style lang="scss">
  // intentionally blank
</style>
