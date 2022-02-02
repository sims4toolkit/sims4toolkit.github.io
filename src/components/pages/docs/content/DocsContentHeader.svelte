<script lang="ts">
  import { getContext } from "svelte";
  import DocTypeReferenceLink from "./DocTypeReferenceLink.svelte";

  export let header: DocsHeader;

  const context: any = getContext("docs");

  function getSourceCodeHref(location: string): string {
    return `${context.getRepoBaseForVersion()}/${location}`;
  }
</script>

<div class="docs-header">
  {#if header.title}
    <div class="header-title">
      <h1>
        {#if header.title.prefix}
          <span class="prefix">{header.title.prefix}</span>
        {/if}
        {header.title.name}
        {#if header.title.generics}
          <span class="prefix">
            &lt;
            {#each header.title.generics as gen, genKey (genKey)}
              {#if genKey !== 0}
                ,
              {/if}
              {gen.name}
              {#if gen.extends}
                extends
                {#each gen.extends as ext, extKey (extKey)}
                  {#if extKey !== 0}
                    ,
                  {/if}
                  <DocTypeReferenceLink typeRef={ext} />
                {/each}
              {/if}
            {/each}
            &gt;
          </span>
        {/if}
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
  <p class="newlines">{header.description}</p>
  {#if header.sourceCode}
    <a
      class="smaller-font"
      href={getSourceCodeHref(header.sourceCode)}
      target="_blank"
    >
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
