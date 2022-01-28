<script lang="ts">
  import SectionHeader from "./SectionHeader.svelte";

  export let title: string = undefined;
</script>

<div class="floating-card drop-shadow">
  <slot name="left" />
  <div class="content">
    {#if title}
      <SectionHeader {title} />
    {/if}
    <slot name="content" />
  </div>
  <slot name="right" />
</div>

<style lang="scss">
  .floating-card {
    background-color: var(--color-card);
    border-radius: 1em;
    padding: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;

    .content {
      font-size: 0.9em;
    }

    @media only screen and (min-width: 768px) {
      :global(div[slot="left"]) {
        margin-right: 1em;
      }

      .content {
        max-width: 60%;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .floating-card {
      flex-wrap: wrap;
    }
  }
</style>
