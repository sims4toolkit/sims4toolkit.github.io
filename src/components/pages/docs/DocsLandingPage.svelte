<script lang="ts">
  import { link } from "svelte-spa-router";
  import documentation from "../../../data/documentation.json";
  import ContentArea from "../../shared/ContentArea.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
</script>

<section id="docs-landing-page">
  <ContentArea>
    <div class="docs-links-wrapper">
      {#each Object.entries(documentation) as [path, props], key (key)}
        <a href="/docs/{path}" use:link>
          <div class="docs-link-container floating-card drop-shadow">
            <span class="pkg-name"><SectionHeader title="@s4tk/{path}" /></span>
            <p>{props.description}</p>
          </div>
        </a>
      {/each}
    </div>
  </ContentArea>
</section>

<style lang="scss">
  section#docs-landing-page {
    min-height: 100vh;
    padding-top: 50px;

    .docs-links-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 20px;
    }

    span.pkg-name {
      white-space: nowrap;
    }

    a {
      text-decoration: none;
      color: var(--color-text);
      position: relative;
      flex: 40%;
      transition: all ease 300ms;
      top: 0;

      &:hover {
        top: -5px;
      }
    }

    .docs-link-container {
      background-color: var(--color-card);
      padding: 1em 2em;
      border-radius: 1em;
      height: 100%;
    }
  }
</style>
