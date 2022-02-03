<script lang="ts">
  export let centerV = true;
  export let rightFill = false;
  export let reverse = false;
  export let expandOnCollapse = false;
  export let reverseOnCollapse = false;
</script>

<div
  class="split-view flex-space-between w-100"
  class:flex-center-v={centerV}
  class:reverse
  class:expand-on-collapse={expandOnCollapse}
  class:reverse-on-collapse={reverseOnCollapse}
>
  <div class="left">
    <slot name="left" />
  </div>
  <div class="right" class:right-fill={rightFill}>
    <slot name="right" />
  </div>
</div>

<style lang="scss">
  .split-view {
    gap: 20px;
  }

  .right-fill {
    width: 100%;
  }

  @media only screen and (min-width: 768px) {
    .split-view.reverse {
      flex-direction: row-reverse;
    }
  }

  @media only screen and (max-width: 768px) {
    .split-view {
      flex-direction: column;
      justify-content: center;

      &.expand-on-collapse {
        .left,
        .right {
          width: 100%;
        }
      }

      &.reverse-on-collapse {
        flex-direction: column-reverse;
      }
    }
  }
</style>
