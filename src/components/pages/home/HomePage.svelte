<script lang="ts">
  import CodeBlock from "../../shared/CodeBlock.svelte";
  import SectionHeader from "../../shared/SectionHeader.svelte";
  import HomeBanner from "./HomeBanner.svelte";
  import ContentArea from "../../shared/ContentArea.svelte";
  import ThreeFeatures from "./ThreeFeatures.svelte";
  import SplitView from "../../shared/SplitView.svelte";
  import SocialLinks from "./SocialLinks.svelte";
</script>

<section id="home">
  <HomeBanner />
  <ContentArea banded={false}>
    <slot>
      <ThreeFeatures />
    </slot>
  </ContentArea>
  <ContentArea banded={true}>
    <slot>
      <SplitView>
        <div slot="left">
          <SectionHeader title="Easily Edit Binary Resources" />
          <p>
            Working with packages, string tables, and SimDatas is as easy as
          </p>
        </div>
        <div slot="right">
          <CodeBlock>
            {`const stbl = StringTableResource.create();
stbl.addAndHash("My first string.");

pkg.add({
  type: BinaryResourceType.StringTable,
  group: 0,
  instance: fnv64("MyNewStringTable")
}, stbl);
`}
          </CodeBlock>
        </div>
      </SplitView>
    </slot>
  </ContentArea>
  <ContentArea banded={false}>
    <slot>
      <SplitView>
        <div slot="right">
          <SectionHeader title="Easily Edit Binary Resources" />
          <p>
            Working with packages, string tables, and SimDatas is as easy as
          </p>
        </div>
        <div slot="left">
          <CodeBlock>
            {`const stbl = StringTableResource.create();
stbl.addAndHash("My first string.");

pkg.add({
  type: BinaryResourceType.StringTable,
  group: 0,
  instance: fnv64("MyNewStringTable")
}, stbl);
`}
          </CodeBlock>
        </div>
      </SplitView>
    </slot>
  </ContentArea>
  <ContentArea banded={true}>
    <slot>
      <SplitView>
        <div slot="left">
          <SectionHeader title="Easily Edit Binary Resources" />
          <p>
            Working with packages, string tables, and SimDatas is as easy as
          </p>
        </div>
        <div slot="right">
          <CodeBlock>
            {`const stbl = StringTableResource.create();
stbl.addAndHash("My first string.");

pkg.add({
  type: BinaryResourceType.StringTable,
  group: 0,
  instance: fnv64("MyNewStringTable")
}, stbl);
`}
          </CodeBlock>
        </div>
      </SplitView>
    </slot>
  </ContentArea>
  <ContentArea banded={false}>
    <slot>
      <SocialLinks />
    </slot>
  </ContentArea>
</section>

<style lang="scss">
  // intentionally blank
</style>
