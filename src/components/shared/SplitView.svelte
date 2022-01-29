<script lang="ts">
  export let centerV = true;
  export let rightFill = false;
  export let reverseOnCollapse = false;
  export let expandOnCollapse = false;
</script>

<div
  class="split-view flex-space-between w-100"
  class:flex-center-v={centerV}
  class:reverse-on-collapse={reverseOnCollapse}
  class:expand-on-collapse={expandOnCollapse}
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
    column-gap: 20px;
  }

  .right-fill {
    width: 100%;
    padding-left: 2em; // FIXME: might need to reduce
  }

  @media only screen and (max-width: 768px) {
    .split-view {
      flex-direction: column;
      justify-content: center;

      &.reverse-on-collapse {
        flex-direction: column-reverse;
      }

      &.expand-on-collapse {
        .left,
        .right {
          width: 100%;
        }
      }

      .left {
        margin-bottom: 1em;
      }

      .right-fill {
        padding-left: 0 !important;
      }
    }
  }
</style>
