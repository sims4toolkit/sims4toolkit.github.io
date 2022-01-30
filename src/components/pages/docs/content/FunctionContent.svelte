<script lang="ts">
  export let functionData: DocsSectionFunction;
</script>

<div class="docs-content-function">
  {functionData.displayType}
</div>

<style lang="scss">
  .docs-content-function {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-card);
  }
</style>
