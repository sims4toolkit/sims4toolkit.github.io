<script lang="ts">
  import DocTypeReferenceLink from "../DocTypeReferenceLink.svelte";

  export let propertyData: DocsSectionProperty;
</script>

<div class="docs-content-property">
  <h4>
    {#if propertyData.prefix}
      <span class="smaller-font unbold">{propertyData.prefix}</span>
    {/if}
    <code class="accent-color">{propertyData.name}</code>
    <span class="unbold">
      {#if propertyData.type}
        :
        <DocTypeReferenceLink typeRef={propertyData.type} />
      {/if}
    </span>
  </h4>
  {#if propertyData.overrides}
    <p class="smaller-font">
      Overrides property in <DocTypeReferenceLink
        typeRef={propertyData.overrides}
      />
    </p>
  {/if}
  <p class="mb-0">{propertyData.description}</p>
</div>

<style lang="scss">
  .docs-content-property {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-card);

    h4 {
      margin: 0;
    }
  }
</style>
