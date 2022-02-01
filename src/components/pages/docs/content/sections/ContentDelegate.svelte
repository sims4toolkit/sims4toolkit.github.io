<script lang="ts">
  import EnumContent from "./EnumContent.svelte";
  import FunctionContent from "./FunctionContent.svelte";
  import GeneralContent from "./GeneralContent.svelte";
  import PropertyContent from "./PropertyContent.svelte";

  export let content: DocsSectionContent;
</script>

{#if content.displayType === "function"}
  <FunctionContent functionData={content} />
{:else if content.displayType === "property"}
  <PropertyContent propertyData={content} />
{:else if content.displayType === "general"}
  <GeneralContent generalData={content} />
{:else if content.displayType === "enum"}
  <EnumContent enumData={content} />
{/if}

<style lang="scss">
  // intentionally blank
</style>
