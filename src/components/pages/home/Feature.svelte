<script lang="ts">
  import SectionHeader from "../../shared/SectionHeader.svelte";

  export let iconSrc: string;
  export let title: string;
  export let description: string;
</script>

<div class="feature floating-card drop-shadow">
  <img src="../assets/{iconSrc}.svg" alt={iconSrc} class="is-svg" />
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
      max-width: 156px;
    }

    span.text-wrapper {
      width: 100%;
      text-align: left;
    }
  }
</style>
