<script lang="ts">
  import BlurOverlay from "../../shared/BlurOverlay.svelte";
  import CodeBlock from "../../shared/CodeBlock.svelte";
  import FloatingCard from "../../shared/FloatingCard.svelte";
  import HollowButton from "../../shared/HollowButton.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import HomeBanner from "./HomeBanner.svelte";
  import HomeSection from "./HomeSection.svelte";

  let showOverlay = true;
</script>

<section id="home">
  {#if showOverlay}
    <BlurOverlay>
      <div class="overlay-content">
        <h1>Welcome, stranger!</h1>
        <p>
          It looks like you're new here, so please note that Sims 4 Toolkit is
          in early development. Some features may be missing, the documentation
          may change frequently, and breaking changes may occur until version
          1.0.0 is released.
        </p>
        <button on:click={() => (showOverlay = false)}>Got it</button>
      </div>
    </BlurOverlay>
  {/if}
  <HomeBanner />
  <HomeSection>
    <slot>
      <SectionHeader title="Easy to Use" />
      <p>It just takes one line of code to load a package file.</p>
      <button on:click={() => (showOverlay = true)}>open</button>
    </slot>
  </HomeSection>
  <HomeSection banded={true}>
    <slot>
      <SectionHeader title="Open Source" />
      <p>
        The Sims 4 Toolkit library comes with full type support in both
        TypeScript and JavaScript to make development as safe as can be.
      </p>
    </slot>
  </HomeSection>
  <HomeSection>
    <slot>
      <SectionHeader title="More to Come" />
      <p>
        The core package of the S4TK library is just a foundation for many other
        modding tools to come. New packages will be added to the S4TK over time,
        including @s4tk/gen, which will assist with generating bulk tuning and
        automatically generate SimData from its tuning. The next planned package
        is @s4tk/tdesc, for validating tuning against TDESCs.
      </p>
      <p>
        Node.js not your thing? No worries. S4TK Desktop is underway - this is a
        desktop app allowing you to leverage the power of the S4TK library from
        the comfort of an IDE.
      </p>
    </slot>
  </HomeSection>
  <HomeSection banded={true}>
    <slot>
      <FloatingCard title="Created by Frankk">
        <div class="simself-portrait-container flex-center" slot="left">
          <img
            src="../assets/frankk.png"
            alt="Frankk Simself"
            class="simself-portrait drop-shadow"
          />
        </div>
        <p slot="content">
          I create mods for players and tools for my peers, and I sincerely hope
          you find them useful! I'm happy to share these creations for free,
          however, it takes up a significant portion of my time, and also costs
          money to maintain. If you enjoy my work and are able to support me on
          Patreon or Ko-fi, I would be very appreciative. Thank you!
        </p>
        <div class="promo-links-container" slot="right">
          <HollowButton
            text="Website"
            color="#6172BD"
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
    </slot>
  </HomeSection>
</section>

<style lang="scss">
  section#home {
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

    .overlay-content {
      p {
        margin-bottom: 2.8em;
      }
    }
  }
</style>
