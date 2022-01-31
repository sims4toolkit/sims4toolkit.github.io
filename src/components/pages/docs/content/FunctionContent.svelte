<script lang="ts">
  import CodeBlock from "../../../shared/CodeBlock.svelte";
  import DocTypeReferenceLink from "./DocTypeReferenceLink.svelte";

  export let functionData: DocsSectionFunction;

  interface Argument {
    name: string;
    type: DocsTypeReference;
    description?: string;
    optional?: boolean;
  }

  function getGenericsText(): string {
    // FIXME: include extends param
    return `<${functionData.generics.map((g) => g.name).join(", ")}>`;
  }

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

  function formatArgumentName(arg: Argument): string {
    return `${arg.name}${arg.optional ? "?" : ""}:`;
  }
</script>

<div class="docs-content-function">
  <h4>
    {#if functionData.prefix}
      <span class="smaller-font">{functionData.prefix}</span>
    {/if}
    {functionData.name}
    <span class="unbold">
      {#if functionData.generics?.length}
        {getGenericsText()}
      {/if}
      {getArgumentsText()}
      {#if functionData.returnType}
        =&gt; <DocTypeReferenceLink typeRef={functionData.returnType} />
      {/if}
    </span>
  </h4>
  <p class="mb-0">{functionData.description}</p>
  {#if functionData.arguments?.length}
    <p class="mini-title">arguments</p>
    {#each functionData.arguments as arg, key (key)}
      <p class="mb-0">
        {formatArgumentName(arg)}
        <DocTypeReferenceLink typeRef={arg.type} />
        <span class="arg-desc">– {arg.description}</span>
      </p>
    {/each}
  {/if}
  {#if functionData.examples?.length}
    <p class="mini-title">example</p>
    {#each functionData.examples as example, key (key)}
      <CodeBlock language={example.lang ?? "js"} useBgSecondary={true}>
        {example.code}
      </CodeBlock>
    {/each}
  {/if}
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

    .mini-title {
      text-transform: uppercase;
      font-size: 0.8em;
      font-weight: bold;
      opacity: 0.5;
      margin-top: 2em;
    }

    .arg-desc {
      opacity: 0.5;
    }
  }
</style>
