<script lang="ts">
  import CodeBlock from "../../../shared/CodeBlock.svelte";

  export let imports: string[];
</script>

<div class="docs-imports">
  <CodeBlock useBgSecondary={true} useDropShadow={false}>
    {#each imports as imp, key (key)}
      {`${key === 0 ? "" : "\n"}${imp}`}
    {/each}
  </CodeBlock>
</div>

<style lang="scss">
  .docs-imports {
    margin-bottom: 20px;
  }
</style>
