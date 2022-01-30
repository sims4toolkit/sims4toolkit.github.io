<script>
  // intentionally using JS because svelte-prism doesn't play nice with TS
  import Prism from "svelte-prism";

  export let language = "javascript";
  export let useBgSecondary = false;
</script>

<div class="prism-wrapper drop-shadow" class:bg-secondary={useBgSecondary}>
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

    &.bg-secondary {
      background-color: var(--color-bg-secondary);
    }
  }
</style>
