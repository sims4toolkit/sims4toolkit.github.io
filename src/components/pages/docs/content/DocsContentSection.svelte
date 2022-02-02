<script lang="ts">
  import SectionHeader from "../../../shared/SectionHeader.svelte";
  import ContentDelegate from "./sections/ContentDelegate.svelte";

  export let section: DocsSection;
</script>

{#if section.title}
  <SectionHeader title={section.title} noTopMargin={true} />
{/if}
{#if section.description}
  <p class="newlines">{section.description}</p>
{/if}
<div
  class="docs-content-body"
  class:pad-top={section.title && !section.description}
>
  {#each section.content as content, key (key)}
    <ContentDelegate {content} />
  {/each}
</div>

<style lang="scss">
  .pad-top {
    margin-top: 20px;
  }

  .docs-content-body {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
</style>
