<script>
  // intentionally using JS because svelte-prism doesn't play nice with TS
  import Prism from "svelte-prism";

  export let language = "javascript";
</script>

<div class="prism-wrapper drop-shadow">
  <Prism {language}>
    <slot />
  </Prism>
</div>

<style lang="scss">
  .prism-wrapper {
    background-color: var(--color-card);
    border-radius: 8px;
    padding: 0 0.5em;
    overflow-x: auto;
  }
</style>
