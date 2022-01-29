<script lang="ts">
  export let centerV = true;
  export let rightFill = false;
</script>

<div class="split-view flex-space-between w-100" class:flex-center-v={centerV}>
  <div class="left">
    <slot name="left" />
  </div>
  <div class="right" class:w-100={rightFill}>
    <slot name="right" />
  </div>
</div>

<style lang="scss">
  @media only screen and (max-width: 768px) {
    .split-view {
      flex-direction: column;
      justify-content: center;

      .left {
        margin-bottom: 1em;
      }
    }
  }
</style>
