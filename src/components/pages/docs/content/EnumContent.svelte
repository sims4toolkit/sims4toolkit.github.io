<script lang="ts">
  export let enumData: DocsSectionEnum;
</script>

<div class="docs-content-enum">
  {enumData.displayType}
</div>

<style lang="scss">
  .docs-content-enum {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-card);
  }
</style>
