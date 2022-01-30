<script lang="ts">
  import { link } from "svelte-spa-router";

  export let typeRef: DocsTypeReference;
</script>

{#if typeRef.path}
  <a href="/" use:link>{typeRef.name}</a>
{:else}
  {typeRef.name}
{/if}

<style lang="scss">
  // intentionally blank
</style>
