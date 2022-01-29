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
  {#each indexData as section, sectionKey (sectionKey)}
    <div class="docs-index-section">
      <h6>{section.title}</h6>
      {#each section.entries as entry, entryKey (entryKey)}
        <div
          class="entry"
          class:active={sectionKey === activeSection &&
            entryKey === activeEntry}
          on:click={() => setActive(sectionKey, entryKey)}
        >
          {entry}
        </div>
      {/each}
    </div>
  {/each}
</section>

<style lang="scss">
  section#docs-index {
    .docs-index-section {
      border-left: 1px solid var(--color-text);
      padding-left: 0.5em;
      min-width: 200px;

      &:not(:last-child) {
        margin-bottom: 2em;
      }

      h6 {
        text-transform: uppercase;
        margin-left: 0.8em;
        margin-bottom: 0.8em;
        opacity: 0.65;
      }

      div.entry {
        padding: 0.5em;
        border-radius: 6px;
        white-space: nowrap;

        &.active {
          background-color: var(--color-text);
          color: var(--color-bg);
        }

        &:hover:not(.active) {
          background-color: var(--color-bg-secondary);
          cursor: pointer;
        }

        &:not(:last-child) {
          margin-bottom: 0.5em;
        }
      }
    }
  }
</style>
