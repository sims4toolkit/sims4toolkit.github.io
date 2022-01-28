<script lang="ts">
  export let nowrap: boolean = false;
  export let title: string;
</script>

<div class="section-header">
  <h3 class:nowrap>{title}</h3>
  <hr />
</div>

<style lang="scss">
  .section-header {
    text-align: left;
    display: inline-block;

    h3 {
      margin-bottom: 0.35em;
    }

    hr {
      background-color: var(--color-accent);
      height: 2px;
      border: 0;
      border-radius: 2px;
      width: 85%;
      margin: 0;
    }
  }
</style>
