<script lang="ts">
  import { link } from "svelte-spa-router";
  import ContentArea from "../../shared/ContentArea.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";

  const discordLink = "https://discord.gg/qNhD3Jh";
</script>

<svelte:head>
  <title>S4TK | Help</title>
</svelte:head>
<section id="help-page" class="under-navbar">
  <ContentArea>
    <SectionHeader title="Website troubles" />
    <p>
      Incorrect/missing docs? Broken link? Error 404? Formatting/accessibility
      issues? Typo?
    </p>
    <p>
      Please let me know about any issues with the website, no matter how big or
      small, either
      <a href={discordLink} target="_blank">on Discord</a> or by
      <a
        href="https://github.com/sims4toolkit/sims4toolkit.github.io/issues"
        target="_blank">opening an issue</a
      >.
    </p>
  </ContentArea>
  <ContentArea banded={true}>
    <SectionHeader title="Package no worky" />
    <p>
      Found a bug in one of the S4TK packages? Open an issue in its GitHub
      repository. To find the bug tracker for a specific package, click the "Bug
      Tracker" link on its <a href="/docs" use:link>documentation page</a>.
    </p>
    <p>
      Please search the existing issues before posting to make sure you are not
      creating a duplicate.
    </p>
  </ContentArea>
  <ContentArea>
    <SectionHeader title="Why Node.js?" />
    <p>
      Yes, JavaScript is an odd choice for a library such as this one. However,
      I was chosen for the following reasons:
    </p>
    <ul>
      <li>
        The initial intention was either to create an extension for VS Code, or
        a standalone desktop app using Electron. For either of these cases, a
        Node.js library would be required.
      </li>
      <li>
        I and some of my peers, including <a
          href="https://lot51.cc/"
          target="_blank">Lot51</a
        >, create web-based tools for Sims 4 modding, such as my
        <a href="https://frankkmods.com/#/ts4-tools/stbl-editor" target="_blank"
          >STBL editor</a
        >
        and his
        <a href="https://lot51.cc/tdesc" target="_blank">TDESC browser</a>. A
        JavaScript-based library enables tools such as these to be more powerful
        with less overhead.
      </li>
      <li>
        JavaScript is a scripting language, and simple tasks can be done with a
        single JS file and called from the command line. This is great for
        environment-agnostic build tools, as well as one-off tasks that you
        don't want to create an entire application to run.
      </li>
    </ul>
  </ContentArea>
  <ContentArea banded={true}>
    <SectionHeader title="Learning the library" />
    <p>
      This website should cover everything you need to get started using the
      Sims 4 Toolkit library, but if you're stuck on something, I'm happy to
      help. Reach out to me
      <a href={discordLink} target="_blank">on Discord</a>.
    </p>
    <!-- <p>
      If you're completely stuck on how to begin using S4TK, please refer to
      <a href="https://patreon.frankkmods.com" target="_blank"
        >this post on Patreon</a
      >
      for a basic introduction to creating a Node.js project and running JS/TS code.
    </p> -->
    <p>
      Please note that I will NOT be offering any further help with Node.js,
      npm, JavaScript, or TypeScript. There are so, so, so many resources
      available to learn them online. Please restrict your questions to those
      pertaining to S4TK specifically.
    </p>
  </ContentArea>
</section>

<style lang="scss">
  ul li:not(:last-child) {
    margin-bottom: 0.5em;
  }
</style>
