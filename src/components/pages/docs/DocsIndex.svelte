<script lang="ts">
  import { setDocsPageRoute } from "../../../services/routing";

  export let params: DocsPageParams;
  export let indexData: DocsIndexData;

  let versionSelect: HTMLSelectElement;

  function onVersionChange() {
    if (versionSelect.value !== params.version) {
      params.version = versionSelect.value;
      setDocsPageRoute(params);
    }
  }

  function isActive(section: string, entry: string) {
    return (
      section.toLowerCase() === params.section.toLowerCase() &&
      entry.toLowerCase() === params.entry.toLowerCase()
    );
  }

  function setActive(section: string, entry: string) {
    if (section !== params.section || entry !== params.entry) {
      params.section = section;
      params.entry = entry;
      setDocsPageRoute(params);
    }
  }
</script>

<section id="docs-index">
  <label for="version-select">Version:</label>
  <select
    name="version-select"
    id="version-select"
    value={params.version}
    bind:this={versionSelect}
    on:change={onVersionChange}
  >
    {#each indexData.versions as version, versionKey (versionKey)}
      <option value={version}>
        {version}
      </option>
    {/each}
  </select>
  {#each indexData.groups as group, sectionKey (sectionKey)}
    <div class="docs-index-section">
      <h6>{group.name}</h6>
      {#each group.items as item, entryKey (entryKey)}
        <div
          class="entry"
          class:active={isActive(group.name, item)}
          on:click={() => setActive(group.name, item)}
        >
          {item}
        </div>
      {/each}
    </div>
  {/each}
</section>

<style lang="scss">
  section#docs-index {
    select {
      padding: 0.3em 0.6em;
      background-color: var(--color-card);
      color: var(--color-text);
      border-radius: 4px;
      border: none;
    }

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
