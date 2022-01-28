<script lang="ts">
  import Router from "svelte-spa-router";
  import Navbar from "./components/Navbar.svelte";
  import Footer from "./components/Footer.svelte";
  import HomePage from "./components/pages/home/HomePage.svelte";
  import NotFoundPage from "./components/pages/NotFoundPage.svelte";
  import DesktopPage from "./components/pages/desktop/DesktopPage.svelte";
  import DocumentationPage from "./components/pages/docs/DocsPage.svelte";

  // https://github.com/ItalyPaleAle/svelte-spa-router
  const routes = {
    "/": HomePage,
    "/docs": DocumentationPage,
    "/desktop": DesktopPage,
    "*": NotFoundPage,
  };
</script>

<Navbar />
<main>
  <Router {routes} />
</main>
<Footer />

<style lang="scss">
  // intentionally blank
</style>
