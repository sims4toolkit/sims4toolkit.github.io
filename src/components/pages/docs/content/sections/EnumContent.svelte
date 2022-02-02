<script lang="ts">
  export let enumData: DocsSectionEnum;
</script>

<div class="docs-content-enum">
  {#each enumData.values as entry, key (key)}
    <h4>
      <span class="accent-color">{entry.name}</span>
      <span class="unbold">= {entry.value}</span>
    </h4>
  {/each}
</div>

<style lang="scss">
  .docs-content-enum {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-card);
  }
</style>
