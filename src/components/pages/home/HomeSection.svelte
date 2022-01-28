<script lang="ts">
  export let banded: boolean = false;
</script>

<div class="home-section flex-center" class:banded>
  <div class="home-section-content">
    <slot />
  </div>
</div>

<style lang="scss">
  .home-section {
    width: 100%;
    padding: 3em 1em;

    &.banded {
      background-color: var(--color-bg-secondary);
    }

    $breakpoint: 1024px;

    @media only screen and (max-width: $breakpoint) {
      .home-section-content {
        width: 100%;
      }
    }

    @media only screen and (min-width: $breakpoint) {
      .home-section-content {
        width: $breakpoint;
      }
    }
  }
</style>
