<script lang="ts">
  // intentionally blank
</script>

<div class="credits-wrapper">
  <h2>With special thanks to...</h2>
  <div class="special-thanks-blurbs">
    <p>
      <strong>Andrew</strong> and <strong>Orangemittens</strong> for creating
      <a href="https://sims4studio.com/" target="_blank">Sims 4 Studio</a>,
      which was invaluable during S4TK's development.
    </p>
    <p>
      The late <strong>Scumbumbo</strong> for his
      <a href="https://modthesims.info/showthread.php?t=618074" target="_blank"
        >internal compression script</a
      >, and the source code of his
      <a
        href="https://modthesims.info/d/563256/xml-extractor-for-the-sims-4.html"
        target="_blank">XML Extractor</a
      > program.
    </p>
    <p>
      The creators and contributors of
      <a
        href="https://github.com/s4ptacle/Sims4Tools/tree/develop"
        target="_blank">Sims 4 Package Interface</a
      >, a .NET codebase with similar goals to S4TK.
    </p>
    <p>
      <strong>Lot51</strong> and <strong>Simsonian Library</strong>, for giving
      me ideas, helping me test, and making their own tools with S4TK.
    </p>
  </div>
  <p class="credits-summary">
    Sims 4 Toolkit would not have been possible without the work done before it.
    A very sincere and humble thank you goes out to all mentioned above.
  </p>
</div>

<style lang="scss">
  .credits-wrapper {
    text-align: center;

    h2 {
      opacity: 0.65;
      width: 100%;
      margin-top: 2em;
      margin-bottom: 0;
    }

    strong {
      color: var(--color-accent);
    }
  }

  .special-thanks-blurbs {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 18px;
    padding: 2em 0;

    p {
      margin-bottom: 0;
    }
  }

  p.credits-summary {
    opacity: 0.65;
    font-size: 0.85em;
  }

  @media only screen and (min-width: 769px) {
    .special-thanks-blurbs {
      p {
        flex: 1 1 0px;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    .special-thanks-blurbs {
      flex-wrap: wrap;

      p {
        width: 100%;
      }
    }
  }
</style>
