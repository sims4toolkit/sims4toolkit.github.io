<script lang="ts">
  import SectionHeader from "../../../shared/SectionHeader.svelte";

  export let section: DocsSection;
</script>

{#if section.title}
  <SectionHeader title={section.title} noTopMargin={true} />
{/if}
{#if section.description}
  <p>{section.description}</p>
{/if}

<style lang="scss">
  // intentionally blank
</style>
