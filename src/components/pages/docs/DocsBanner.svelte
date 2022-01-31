<script lang="ts">
  import GradientBanner from "../../shared/GradientBanner.svelte";

  export let packageData: PackageData;
  $: npmInstallText = `npm i ${packageData.npmName}`;
  let npmInstallTextElement: HTMLElement;

  function copyNpmInstallText() {
    if (!navigator.clipboard) {
      const range = document.createRange();
      range.selectNode(npmInstallTextElement);
      window.getSelection().removeAllRanges();
      window.getSelection().addRange(range);
      document.execCommand("copy");
      window.getSelection().removeAllRanges();
    } else {
      navigator.clipboard.writeText(npmInstallText);
    }
  }
</script>

<GradientBanner>
  <div id="docs-banner" class="flex-center flex-col">
    <h2 class="text-center text-shadow m-0">
      {packageData.description}
    </h2>
    <p class="text-center">
      Available on <a href={packageData.npmLink} target="_blank">npm</a> and
      <a href={packageData.repoLink} target="_blank">GitHub</a>.
    </p>
    <div class="npm-install-container flex-center">
      <code bind:this={npmInstallTextElement}>{npmInstallText}</code>
      <img
        src="./assets/copy.svg"
        alt="copy"
        class="is-svg light-svg hoverable"
        on:click={copyNpmInstallText}
      />
    </div>
  </div>
</GradientBanner>

<style lang="scss">
  #docs-banner {
    a {
      color: var(--color-light);
    }

    .npm-install-container {
      background-color: var(--color-shadow);
      box-shadow: 0 2px 4px var(--color-shadow);
      padding: 0.5em 1em;
      border-radius: 0.35em;
      margin-top: 1.5em;

      img {
        margin-left: 1em;
      }
    }
  }
</style>
