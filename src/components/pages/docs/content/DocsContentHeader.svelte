<script lang="ts">
  import DocTypeReferenceLink from "./DocTypeReferenceLink.svelte";

  export let header: DocsHeader;
</script>

<div class="docs-header">
  {#if header.title}
    <div class="header-title">
      <h1>
        {#if header.title.prefix}
          <span class="prefix">{header.title.prefix}</span>
        {/if}
        {header.title.name}
      </h1>
      <div class="smaller-font">
        {#if header.title.extends?.length}
          extends
          {#each header.title.extends as parent, key (key)}
            <DocTypeReferenceLink typeRef={parent} />
          {/each}
        {/if}
        {#if header.title.implements?.length}
          {#if header.title.extends?.length}
            |
          {/if}
          implements
          {#each header.title.implements as parent, key (key)}
            <DocTypeReferenceLink typeRef={parent} />
          {/each}
        {/if}
      </div>
    </div>
  {/if}
  <p>{header.description}</p>
  {#if header.repoUrl}
    <a class="smaller-font" href={header.repoUrl} target="_blank">
      View Source Code
    </a>
  {/if}
</div>

<style lang="scss">
  .docs-header {
    .header-title {
      h1 {
        margin-top: 0;
        margin-bottom: 0;

        span.prefix {
          margin-top: 1em;
          font-weight: normal;
          font-size: 0.8em;
        }
      }
    }
  }
</style>
