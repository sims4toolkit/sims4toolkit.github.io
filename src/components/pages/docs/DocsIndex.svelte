<script lang="ts">
  import { getContext } from "svelte";

  export let indexData: DocsIndexData;
  export let params: DocsPageParams;

  let versionSelect: HTMLSelectElement;
  let changelogHref: string;

  const context: any = getContext("docs");

  $: {
    params.package;
    changelogHref = `https://github.com/sims4toolkit/${params.package}/blob/main/CHANGELOG.md`;
  }

  function onVersionChange() {
    if (versionSelect.value !== params.version) {
      context.redirect({ version: versionSelect.value });
    }
  }

  function isActive(group: string, item: string) {
    return (
      group &&
      item &&
      group.toLowerCase() === params.group?.toLowerCase() &&
      item.toLowerCase() === params.item?.toLowerCase()
    );
  }

  function setActive(group: string, item: string) {
    if (group !== params.group || item !== params.item) {
      context.redirect({ group, item });
      context.scrollToTop();
    }
  }

  function getSelectName(version: string): string {
    return version === indexData.versions[0] ? `${version} (latest)` : version;
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
        {getSelectName(version)}
      </option>
    {/each}
  </select>
  <p class="smaller-font">
    <a href={changelogHref} target="_blank"> Version History </a>
  </p>
  {#each indexData.groups as group, sectionKey (sectionKey)}
    <div class="docs-index-section">
      <h6>{group.name}</h6>
      {#each group.items as item, entryKey (entryKey)}
        <div
          class="entry"
          class:active={isActive(group.name, item) && params}
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
      border-left: 1px solid var(--color-divider);
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
