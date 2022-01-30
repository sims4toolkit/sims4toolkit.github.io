<script lang="ts">
  import DocTypeReferenceLink from "./DocTypeReferenceLink.svelte";

  export let functionData: DocsSectionFunction;

  function getArgumentsText(): string {
    if (functionData.arguments?.length) {
      const argNames = functionData.arguments.map((arg) => {
        return arg.name + (arg.optional ? "?" : "");
      });

      return `(${argNames.join(", ")})`;
    } else {
      return "()";
    }
  }
</script>

<div class="docs-content-function">
  <h4>
    {#if functionData.prefix}
      <span class="smaller-font">{functionData.prefix}</span>
    {/if}
    {functionData.name}
    <span class="unbold">
      {getArgumentsText()}
      {#if functionData.returnType}
        =&gt; <DocTypeReferenceLink typeRef={functionData.returnType} />
      {/if}
    </span>
  </h4>
  <p>{functionData.description}</p>
</div>

<style lang="scss">
  .docs-content-function {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-card);

    h4 {
      margin: 0;

      .unbold {
        font-weight: normal;
      }
    }
  }
</style>
