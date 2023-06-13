<script lang="ts">
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import HomePage from "./components/pages/home/HomePage.svelte";
  import NotFoundPage from "./components/pages/NotFoundPage.svelte";
  import DesktopPage from "./components/pages/desktop/DesktopPage.svelte";
  import DocsLandingPage from "./components/pages/docs/DocsLandingPage.svelte";
  import DocsPage from "./components/pages/docs/DocsPage.svelte";
  import HelpPage from "./components/pages/help/HelpPage.svelte";

  // https://github.com/ItalyPaleAle/svelte-spa-router
  const routes = {
    "/": HomePage,
    "/help": HelpPage,
    "/docs": DocsLandingPage,
    "/docs/:package/:version?/:group?/:item?": DocsPage,
    "/desktop": DesktopPage,
    "*": NotFoundPage,
  };

  window.addEventListener("hashchange", function (event) {
    if (event.oldURL || event.newURL) {
      window.scrollTo(0, 0);
    }
  });
</script>

<Navbar />
<main>
  <Router {routes} />
  <Footer />
</main>

<style lang="scss">
  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
</style>
