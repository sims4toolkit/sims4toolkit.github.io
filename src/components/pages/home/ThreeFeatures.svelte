<script lang="ts">
  import Feature from "./Feature.svelte";
</script>

<div class="three-features">
  <Feature
    iconSrc="typescript-logo"
    title="Made with TypeScript"
    description="Coming with full type support makes S4TK easy to use and robust."
  />
  <Feature
    iconSrc="code-slash-outline"
    title="Open Source"
    description="Feel free to view the source code, open issues, make pull requests, or fork the project on GitHub."
  />
  <Feature
    iconSrc="cog-outline"
    title="More to Come"
    description="Lorem ipsum doler sit amut whatever blah blah."
  />
</div>

<style lang="scss">
  .three-features {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
  }
</style>
