<script lang="ts">
  import { link } from "svelte-spa-router";
  import ContentArea from "../../shared/ContentArea.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";

  const discordLink = "https://discord.gg/qNhD3Jh";
</script>

<section id="help-page" class="under-navbar">
  <ContentArea>
    <SectionHeader title="Website troubles" />
    <p>
      Incorrect/missing docs? Typo? Error 404? Please let me know about any
      issues with the website
      <a href={discordLink} target="_blank">on Discord</a>.
    </p>
  </ContentArea>
  <ContentArea banded={true}>
    <SectionHeader title="Package no worky" />
    <p>
      Found a bug in any of the S4TK packages? Open an issue in its GitHub
      repository. Please search the existing issues before posting to make sure
      you are not creating a duplicate.
    </p>
    <p>
      To find the repo for a specific package, click the "GitHub" link under its
      description on its <a href="/docs" use:link>documentation page</a>.
    </p>
  </ContentArea>
  <ContentArea>
    <SectionHeader title="Learning the library" />
    <p>
      This website should cover everything you need to get started using the
      Sims 4 Toolkit library, but if you're stuck on something, I'm happy to
      help. Reach out to me
      <a href={discordLink} target="_blank">on Discord</a>.
    </p>
    <p>
      Please note that I will NOT be offering general help with Node.js or
      JavaScript. There are so, so, so many resources available to learn them
      online. Please restrict your questions to those pertaining to S4TK
      specifically, rather than Node.js or JavaScript.
    </p>
  </ContentArea>
</section>

<style lang="scss">
  section#help-page {
    min-height: 100vh;
  }
</style>
