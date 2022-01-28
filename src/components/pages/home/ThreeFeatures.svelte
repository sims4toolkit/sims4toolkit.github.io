<script lang="ts">
  import Feature from "./Feature.svelte";
</script>

<div class="three-features">
  <Feature
    iconSrc="sunny-outline"
    title="Type Support"
    description="Lorem ipsum doler sit amut whatever blah blah."
  />
  <Feature
    iconSrc="code-slash-outline"
    title="Open Source"
    description="Lorem ipsum doler sit amut whatever blah blah."
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
