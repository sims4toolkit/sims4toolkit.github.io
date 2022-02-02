<script lang="ts">
  import CodeBlock from "../../../../shared/CodeBlock.svelte";
  import DocTypeReferenceLink from "../DocTypeReferenceLink.svelte";

  export let functionData: DocsSectionFunction;

  interface Argument {
    name: string;
    type: DocsTypeReference;
    description?: string;
    optional?: boolean;
  }

  function getGenericsText(gens: DocsTypeGeneric[]): string {
    // FIXME: include extends param
    return `<${gens.map((g) => g.name).join(", ")}>`;
  }

  function getArgumentsText(args: DocsFunctionArguments[]): string {
    const argNames = args.map((arg) => {
      return arg.name + (arg.optional ? "?" : "");
    });

    return `(${argNames.join(", ")})`;
  }

  function formatArgumentName(arg: Argument): string {
    return `${arg.name}${arg.optional ? "?" : ""}:`;
  }
</script>

<div class="docs-content-function">
  <h4>
    {#if functionData.prefix}
      <span class="smaller-font unbold">{functionData.prefix}</span>
    {/if}
    <code class="accent-color">{functionData.name}</code>
    <span class="unbold">
      {#if functionData.generics?.length}
        <code>{getGenericsText(functionData.generics)}</code>
      {/if}
      {#if functionData.arguments?.length}
        <code>{getArgumentsText(functionData.arguments)}</code>
      {:else}
        <code>()</code>
      {/if}
      {#if functionData.returnType}
        <code>=&gt;</code>
        <DocTypeReferenceLink typeRef={functionData.returnType} />
      {/if}
    </span>
  </h4>
  {#if functionData.overrides}
    <p class="smaller-font">
      Overrides method in <DocTypeReferenceLink
        typeRef={functionData.overrides}
      />
    </p>
  {/if}
  <p class="mb-0">{functionData.description}</p>
  {#if functionData.arguments?.length}
    <p class="mini-title">arguments</p>
    {#each functionData.arguments as arg, argKey (argKey)}
      <p class="mb-0">
        <code>{formatArgumentName(arg)}</code>
        <DocTypeReferenceLink typeRef={arg.type} />
        <span class="arg-desc">– {arg.description}</span>
      </p>
      {#if arg.properties?.length}
        <div class="arg-properties-container">
          {#each arg.properties as prop, propKey (propKey)}
            <p class="mb-0">
              <code>{formatArgumentName(prop)}</code>
              <DocTypeReferenceLink typeRef={prop.type} />
              <span class="arg-desc">– {prop.description}</span>
            </p>
          {/each}
        </div>
      {/if}
    {/each}
  {/if}
  <!-- NOTE: examples break unless docs are deleted -->
  {#if functionData.examples?.length}
    <p class="mini-title">example</p>
    <div class="examples-container">
      {#each functionData.examples as example, key (key)}
        <CodeBlock language={example.lang ?? "js"} useBgSecondary={true}>
          {example.code}
        </CodeBlock>
      {/each}
    </div>
  {/if}
</div>

<style lang="scss">
  .docs-content-function {
    padding: 20px;
    border-radius: 8px;
    background-color: var(--color-card);

    h4 {
      margin: 0;
    }

    .mini-title {
      text-transform: uppercase;
      font-size: 0.8em;
      font-weight: bold;
      opacity: 0.5;
      margin-top: 2em;
    }

    .arg-properties-container {
      border-left: 1px solid var(--color-text);
      padding-left: 1em;
    }

    .arg-desc {
      opacity: 0.5;
    }

    .examples-container {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
    }
  }
</style>
