<script lang="ts">
  import { getContext } from "svelte";

  export let typeRef: DocsTypeReference;
  export let useCommas: boolean = false;

  const context: any = getContext("docs");
</script>

<span class:use-commas={useCommas}>
  {#if typeRef.externalLink}
    <a href={typeRef.externalLink} target="_blank">{typeRef.name}</a>
  {:else if typeRef.path}
    <a href={context.getHrefForPath(typeRef.path)}>{typeRef.name}</a>
  {:else}
    {typeRef.name}
  {/if}
</span>

<style lang="scss">
  span.use-commas:not(:last-child):after {
    content: ", ";
  }
</style>
