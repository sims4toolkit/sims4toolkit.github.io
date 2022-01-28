<script lang="ts">
  // intentionally blank
</script>

<div class="split-view flex-center-v flex-space-between w-100">
  <div class="left">
    <slot name="left" />
  </div>
  <div class="right">
    <slot name="right" />
  </div>
</div>

<style lang="scss">
  @media only screen and (max-width: 512px) {
    .split-view {
      flex-direction: column;
      justify-content: center;

      .left {
        margin-bottom: 1em;
      }
    }
  }
</style>
