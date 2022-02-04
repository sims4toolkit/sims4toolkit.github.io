<script lang="ts">
  import { link } from "svelte-spa-router";
  import documentation from "../../../data/documentation.json";
  import ContentArea from "../../shared/ContentArea.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
</script>

<svelte:head>
  <title>S4TK | Docs</title>
</svelte:head>
<section id="docs-landing-page" class="under-navbar">
  <ContentArea>
    <div class="docs-links-wrapper">
      {#each Object.entries(documentation) as [path, props], key (key)}
        <a
          href="/docs/{path}"
          use:link
          class="move-on-hover"
          class:pinned={props.pinned}
        >
          <div class="docs-link-container floating-card drop-shadow">
            {#if props.pinned}
              <img
                class="pin"
                src="../assets/star.svg"
                alt="pin"
                title="This is a popular package!"
              />
            {/if}
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
      flex: 45%;

      &.pinned {
        order: -1;
        flex: 100%;
      }
    }

    .docs-link-container {
      height: 100%;

      img.pin {
        position: absolute;
        top: 1em;
        right: 1em;
        width: 24px;
        filter: invert(87%) sepia(47%) saturate(951%) hue-rotate(331deg)
          brightness(98%) contrast(87%);
      }
    }
  }
</style>
