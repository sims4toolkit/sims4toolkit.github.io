<script lang="ts">
  export let propertyData: DocsSectionProperty;
</script>

<div class="docs-content-property">
  {propertyData.displayType}
</div>

<style lang="scss">
  .docs-content-property {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-card);
  }
</style>
