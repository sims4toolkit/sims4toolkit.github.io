<script lang="ts">
  import CodeBlock from "../../shared/CodeBlock.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import SplitView from "../../shared/SplitView.svelte";

  export let title: string;
  export let description: string;
  export let code: string;
  export let reverse: boolean = false;
</script>

<SplitView {reverse} expandOnCollapse={true}>
  <div slot="left" class="text-left">
    <SectionHeader {title} />
    <p>{description}</p>
  </div>
  <div slot="right">
    <CodeBlock>
      {code}
    </CodeBlock>
  </div>
</SplitView>

<style lang="scss">
  // intentionally blank
</style>
