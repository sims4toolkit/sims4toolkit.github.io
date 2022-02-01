<script lang="ts">
  export let generalData: DocsSectionGeneral;
</script>

<div>
  {#each generalData.paragraphs as para, key (key)}
    <p>{para}</p>
  {/each}
</div>

<style lang="scss">
  // TODO
</style>
