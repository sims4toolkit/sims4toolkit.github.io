<script lang="ts">
  import FloatingCard from "../../shared/FloatingCard.svelte";
  import HollowButton from "../../shared/HollowButton.svelte";
</script>

<FloatingCard title="Created by Frankk">
  <div class="simself-portrait-container flex-center" slot="left">
    <img
      src="../assets/frankk.png"
      alt="Frankk Simself"
      class="simself-portrait drop-shadow"
    />
  </div>
  <p slot="content">
    I create mods for players and tools for my peers, and I sincerely hope you
    find them useful. All of my mods and tools are available for free, but if
    you enjoy my work and are able to support me on Patreon or Ko-fi, I would be
    very appreciative. Thank you!
  </p>
  <div class="promo-links-container" slot="right">
    <HollowButton
      text="Website"
      color="#8989fa"
      link="https://frankkmods.com"
    />
    <HollowButton
      text="Twitter"
      color="#29A7DF"
      link="https://twitter.com/frankkulakmods"
    />
    <HollowButton
      text="Patreon"
      color="#F96854"
      link="https://patreon.frankkmods.com"
    />
    <HollowButton
      text="Ko-fi"
      color="#fbaa19"
      link="https://ko-fi.com/frankkulak"
    />
    <HollowButton
      text="Discord"
      color="#7289DA"
      link="https://discord.gg/qNhD3Jh"
    />
  </div>
</FloatingCard>

<style lang="scss">
  .simself-portrait-container {
    height: 100%;

    img.simself-portrait {
      height: 128px;
      border-radius: 50%;
      margin: 1em 0.5em;
    }
  }

  .promo-links-container {
    display: flex;
    justify-content: center;
    align-content: space-around;
    flex-wrap: wrap;
  }
</style>
