<script lang="ts">
  import { onDestroy, onMount } from "svelte";

  export let showDisclaimer = true;
  export let hideable = false;

  let banner: HTMLElement;
  let hideBannerSetting: boolean =
    localStorage.getItem("hideBanner") === "true";

  $: imgPath = hideBannerSetting
    ? "../assets/eye-off-outline.svg"
    : "../assets/eye-outline.svg";

  $: imgAlt = hideBannerSetting ? "Banner Hidden" : "Banner Shown";

  function toggleBanners() {
    hideBannerSetting = !hideBannerSetting;
    localStorage.setItem("hideBanner", `${hideBannerSetting}`);
    if (hideBannerSetting) {
      window.scroll({
        top: banner.offsetHeight - 50,
        behavior: "smooth",
      });
    }
  }

  function skipBanner() {
    if (hideBannerSetting) window.scrollTo(0, banner.offsetHeight - 50);
  }

  onMount(() => {
    if (hideable) {
      skipBanner();
      window.addEventListener("hashchange", skipBanner);
    }
  });

  onDestroy(() => {
    if (hideable) window.removeEventListener("hashchange", skipBanner);
  });
</script>

<div
  id="gradient-banner"
  class="gradient-banner default-gradient-bg flex-center flex-col"
  bind:this={banner}
>
  <div class="banner-content">
    <slot />
  </div>
  {#if showDisclaimer}
    <p class="disclaimer text-center">
      The Sims™ and its plumbob icon are registered trademarks of Electronic
      Arts, Inc. (EA). Sims 4 Toolkit is not affiliated with or endorsed by EA.
    </p>
  {/if}
  {#if hideable}
    <img
      class="banner-toggle is-svg light-svg hoverable"
      src={imgPath}
      alt={imgAlt}
      on:click={toggleBanners}
    />
  {/if}
</div>

<style lang="scss">
  .gradient-banner {
    position: relative;
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

    img.banner-toggle {
      width: 20px;
      position: absolute;
      bottom: 20px;
      right: 20px;
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
