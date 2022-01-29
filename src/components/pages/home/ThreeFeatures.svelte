<script lang="ts">
  import Feature from "./Feature.svelte";
</script>

<div class="three-features">
  <Feature
    iconSrc="rocket-outline"
    title="Great Performance"
    description="Read packages in an instant, and enable filters and cacheing to speed up larger tasks."
  />
  <Feature
    iconSrc="earth-outline"
    title="Open Source"
    description="View the source code, open issues, make pull requests, or fork the project on GitHub."
  />
  <Feature
    iconSrc="library-outline"
    title="Growing Library"
    description="S4TK is still early in development, and many more packages are planned to be added."
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
