<script>
  // intentionally using JS because svelte-prism doesn't play nice with TS
  import Prism from "svelte-prism";

  export let language = "javascript";
  export let useBgSecondary = false;
  export let useDropShadow = true;
</script>

<div
  class="prism-wrapper"
  class:drop-shadow={useDropShadow}
  class:bg-secondary={useBgSecondary}
>
  <Prism {language}>
    <slot />
  </Prism>
</div>

<style lang="scss">
  .prism-wrapper {
    background-color: var(--color-card);
    border-radius: 8px;
    padding: 0 0.5em;
    max-width: 100%;
    overflow-x: auto;

    &.bg-secondary {
      background-color: var(--color-bg-secondary);
    }
  }
</style>
