<script lang="ts">
  import { getContext } from "svelte";

  export let typeRef: DocsTypeReference;

  const context: any = getContext("docs");
</script>

<span>
  {#if typeRef.path}
    <a href={context.getHrefForPath(typeRef.path)}>{typeRef.name}</a>
  {:else}
    {typeRef.name}
  {/if}
</span>

<style lang="scss">
  span:not(:last-child):after {
    content: ", ";
  }
</style>
