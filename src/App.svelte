<script lang="ts">
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import HomePage from "./components/pages/home/HomePage.svelte";
  import NotFoundPage from "./components/pages/NotFoundPage.svelte";
  import DesktopPage from "./components/pages/desktop/DesktopPage.svelte";
  import DocsLandingPage from "./components/pages/docs/DocsLandingPage.svelte";
  import DocsPage from "./components/pages/docs/DocsPage.svelte";
  import BlurOverlay from "./components/shared/BlurOverlay.svelte";
  import { onMount } from "svelte";

  let showOverlay = false;

  onMount(() => {
    const hasBeenOnboarded = localStorage.getItem("hasBeenOnboarded");
    if (!hasBeenOnboarded) {
      setTimeout(() => {
        showOverlay = true;
        localStorage.setItem("hasBeenOnboarded", "true");
      }, 200);
    }
  });

  // https://github.com/ItalyPaleAle/svelte-spa-router
  const routes = {
    "/": HomePage,
    "/docs": DocsLandingPage,
    "/docs/:package": DocsPage,
    "/desktop": DesktopPage,
    "*": NotFoundPage,
  };
</script>

<Navbar />
<main>
  <Router {routes} />
</main>
<Footer />
{#if showOverlay}
  <BlurOverlay>
    <div slot="content">
      <h2>Welcome, stranger!</h2>
      <p>
        It looks like you're new here, so please note that Sims 4 Toolkit is in
        early development. Some features may be missing, the documentation may
        change frequently, and breaking changes may occur until version 1.0.0 is
        released.
      </p>
    </div>
    <div slot="actions">
      <button on:click={() => (showOverlay = false)}>Got it</button>
    </div>
  </BlurOverlay>
{/if}

<style lang="scss">
  // intentionally blank
</style>
