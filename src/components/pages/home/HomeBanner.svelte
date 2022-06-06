<script lang="ts">
  import CodeBlock from "../../shared/CodeBlock.svelte";
  import GradientBanner from "../../shared/GradientBanner.svelte";
  import SplitView from "../../shared/SplitView.svelte";
</script>

<GradientBanner>
  <div id="home-banner" class="flex-center flex-col">
    <SplitView>
      <div class="home-banner-left text-center" slot="left">
        <h2 class="text-center text-shadow">Node.js Library for The Sims 4</h2>
        <p>
          Read and write package files and the resources they contain with a
          fluent API.
        </p>
      </div>
      <div slot="right">
        <CodeBlock>
          {`import { Package } from "@s4tk/models";

const pkg = Package.from(buffer);

pkg.entries.forEach(entry => {
  doStuff(entry.resource);
});`}
        </CodeBlock>
      </div>
    </SplitView>
  </div>
</GradientBanner>

<style lang="scss">
  #home-banner {
    .home-banner-left {
      padding: 0 1em;
      max-width: 420px;
    }
  }
</style>
