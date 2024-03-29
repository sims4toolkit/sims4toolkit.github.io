<script lang="ts">
  import DocsBanner from "./DocsBanner.svelte";
  import documentation from "../../../data/documentation.json";
  import { link, replace } from "svelte-spa-router";
  import BlurOverlay from "../../shared/BlurOverlay.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import ContentArea from "../../shared/ContentArea.svelte";
  import DocsIndex from "./DocsIndex.svelte";
  import SplitView from "../../shared/SplitView.svelte";
  import DocsContent from "./DocsContent.svelte";
  import { setContext } from "svelte";
  import DocumentationController from "../../../controllers/documentation";
  import compare from "just-compare";
  import clone from "just-clone";

  export let params: DocsPageParams;

  const controller = new DocumentationController();

  let isError = false;
  let showErrorOverlay = false;
  let docsReady = false;
  let packageData: PackageData;
  let indexData: DocsIndexData;
  let lastParams: DocsPageParams;

  async function redirect(newParams: Partial<DocsPageParams>) {
    const paramsToUse: Partial<DocsPageParams> = {};
    for (const param in params) {
      paramsToUse[param] = newParams[param] ?? params[param];
    }

    controller.resolveParams(paramsToUse).then((newPath) => {
      if (newPath) {
        replace(newPath);
      }
    });
  }

  setContext("docs", {
    controller,
    redirect,
    getHrefForPath({ pkg, group, item }) {
      const version = params.package === pkg ? params.version : "latest";
      return `#/docs/${pkg}/${version}/${group}/${item}`;
    },
    getRepoBaseForVersion(): string {
      const pkg = params.package;
      const version = params.version.replace(/\./g, "-");
      return `https://github.com/sims4toolkit/${pkg}/blob/version/${version}`;
    },
    async scrollToTop() {
      try {
        const bodyPos =
          document.getElementById("docs-page-body")?.offsetTop - 50;

        const currentPos =
          window.pageYOffset || document.documentElement.scrollTop;

        if (currentPos > bodyPos) {
          window.scroll({
            top: bodyPos,
            behavior: "smooth",
          });
        }
      } catch (e) {
        console.warn(e);
      }
    },
  });

  $: {
    params; // listen for changes

    if (!(lastParams && compare(params, lastParams))) {
      packageData = documentation[params.package];
      lastParams = clone(params);
      isError = false;
      showErrorOverlay = false;
      loadIndex();
    }
  }

  async function loadIndex() {
    if (params.package in documentation) {
      controller
        .requestIndex(params)
        .then((index) => {
          indexData = index as DocsIndexData;

          controller
            .resolveParams(params)
            .then((newPath) => {
              if (newPath) {
                replace(newPath);
              } else {
                docsReady = true;
              }
            })
            .catch((msg) => {
              console.error(msg);
            });
        })
        .catch((msg) => {
          console.warn(msg);
          showErrorOverlay = true;
          setTimeout(() => {
            isError = true;
          }, 220);
        });
    } else {
      replace("/page-not-found");
    }
  }
</script>

<section id="docs-page">
  <DocsBanner {packageData} />
  <!-- ID used in reference link for scrolling -->
  <div id="docs-page-body">
    {#if isError}
      <ContentArea>
        <div class="fadein">
          <SectionHeader title="Unlock these docs for $4.04" />
          <p>
            Just kidding. This documentation couldn't be found. Please try
            refreshing the page, and <a href="/help" use:link>let me know</a> if
            the error persists.
          </p>
          {#if packageData}
            <p>
              For the time being, feel free to browse the project
              <a href={packageData.repoLink} target="_blank">on GitHub</a>.
            </p>
          {/if}
          <p class="disclaimer">Error 404</p>
        </div>
      </ContentArea>
    {:else if docsReady}
      <ContentArea>
        <div>
          {#if docsReady && indexData.notice != undefined}
            <div id="docs-page-notice" class="w-100">
              <div class="flex-center-v">
                <img
                  src="./assets/flask-outline.svg"
                  alt="Flask"
                  class="is-svg"
                />
                <h3 class="my-0 accent-color">Experimental</h3>
              </div>
              <p class="mt-0">{indexData.notice.text}</p>
              <hr />
            </div>
          {/if}
          <SplitView
            centerV={false}
            rightFill={true}
            reverseOnCollapse={true}
            hideRightOverflowX={true}
          >
            <div slot="left">
              <DocsIndex {indexData} bind:params />
            </div>
            <div slot="right">
              <DocsContent bind:params />
            </div>
          </SplitView>
        </div>
      </ContentArea>
    {:else}
      <ContentArea>
        <div class="flex-center w-100 loading-text">
          <h1>Loading...</h1>
        </div>
      </ContentArea>
    {/if}
  </div>
</section>
{#if showErrorOverlay}
  <BlurOverlay>
    <div slot="content">
      <h2>Oops...</h2>
      <p>
        Something went wrong, and the documentation for @s4tk/{params.package}
        could not be found. Please try refreshing the page, and if the error persists,
        <a href="/help" use:link>let me know</a>.
      </p>
    </div>
    <div slot="actions">
      <span class="button" on:click={() => (showErrorOverlay = false)}>
        Dismiss
      </span>
      <a class="button" href="/docs" use:link>Back to Docs</a>
    </div>
  </BlurOverlay>
{/if}

<style lang="scss">
  section#docs-page {
    #docs-page-body {
      min-height: 100vh;
    }

    #docs-page-notice {
      margin-bottom: 3em;

      img {
        height: 1.8em;
        margin-right: 1em;
        filter: var(--filter-accent);
      }

      hr {
        margin-top: 3em;
        opacity: 0.5;
      }
    }

    .loading-text {
      opacity: 0.1;
    }
  }
</style>
