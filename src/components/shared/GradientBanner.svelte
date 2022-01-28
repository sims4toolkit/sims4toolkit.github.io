<script lang="ts">
  export let showDisclaimer = true;
</script>

<div class="gradient-banner default-gradient-bg flex-center flex-col">
  <div class="banner-content">
    <slot />
  </div>
  {#if showDisclaimer}
    <p class="disclaimer text-center">
      The Sims™ and its plumbob icon are registered trademarks of Electronic
      Arts, Inc. (EA). Sims 4 Toolkit is not affiliated with or endorsed by EA.
    </p>
  {/if}
</div>

<style lang="scss">
  .gradient-banner {
    width: 100%;
    color: var(--color-light);
    padding: {
      top: 50px;
      left: 1em;
      right: 1em;
      bottom: 1em;
    }

    .banner-content {
      margin: 3.5em 0;
    }
  }

  $breakpoint: 896px;

  @media only screen and (max-width: $breakpoint) {
    .banner-content {
      width: 100%;
      padding: 0 1em;
    }
  }

  @media only screen and (min-width: $breakpoint) {
    .banner-content {
      width: $breakpoint;
    }
  }
</style>
