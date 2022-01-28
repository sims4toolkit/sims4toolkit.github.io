<script lang="ts">
  import SectionHeader from "../../shared/SectionHeader.svelte";

  export let iconSrc: string;
  export let title: string;
  export let description: string;
  export let useSvgFilter: boolean = true;
</script>

<div class="feature floating-card drop-shadow">
  <img
    src="../assets/{iconSrc}.svg"
    alt={iconSrc}
    class:is-svg={useSvgFilter}
  />
  <span class="text-wrapper">
    <SectionHeader {title} nowrap={true} />
    <p>{description}</p>
  </span>
</div>

<style lang="scss">
  .feature {
    flex: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      max-width: 128px;
      margin: 1em 0;
    }

    span.text-wrapper {
      width: 100%;
    }
  }
</style>
