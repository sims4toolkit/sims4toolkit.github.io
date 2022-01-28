<script lang="ts">
  export let indexData: DocsIndexData;

  let activeSection = 0;
  let activeEntry = 0;

  function setActive(sectionKey: number, entryKey: number) {
    activeSection = sectionKey;
    activeEntry = entryKey;
  }
</script>

<section id="docs-index">
  {#each indexData.sections as section, sectionKey (sectionKey)}
    <p>{section.title}</p>
    {#each section.entries as entry, entryKey (entryKey)}
      <p
        class:active={sectionKey === activeSection && entryKey === activeEntry}
        on:click={() => setActive(sectionKey, entryKey)}
      >
        {entry.type}
        {entry.name}
      </p>
    {/each}
  {/each}
</section>

<style lang="scss">
  section#docs-index {
    .active {
      color: var(--color-accent);
    }
  }
</style>
