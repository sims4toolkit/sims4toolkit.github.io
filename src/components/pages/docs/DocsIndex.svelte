<script lang="ts">
  export let indexData: DocsIndexData;
</script>

<div>
  {#each indexData.sections as section, key (key)}
    <p>{section.title}</p>
    {#each section.entries as entry, key (key)}
      <p>{entry.type} {entry.name}</p>
    {/each}
  {/each}
</div>

<style lang="scss">
  // TODO
</style>
