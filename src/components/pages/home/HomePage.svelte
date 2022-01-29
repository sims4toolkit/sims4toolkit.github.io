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
      <SplitView expandOnCollapse={true}>
        <div slot="left" class="text-left">
          <SectionHeader title="Full Functional XML DOM for Tuning" />
          <p>
            Working with packages, string tables, and SimDatas is just as easy
            as plain-text XML, since they all come with fully parsed models.
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
      <SplitView reverseOnCollapse={true} expandOnCollapse={true}>
        <div slot="right" class="text-left">
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
      <SplitView expandOnCollapse={true}>
        <div slot="left" class="text-left">
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
