# Anchor 锚点

用于跳转到页面指定位置。

## 基础用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Anchor show-ink>
      <AnchorLink href="#Basic demo" title="Basic demo"></AnchorLink>
      <AnchorLink href="#Fixed demo" title="Fixed demo"></AnchorLink>
      <AnchorLink href="#API" title="API">
        <AnchorLink href="#Anchor Props" title="Anchor Props" disabled></AnchorLink>
        <AnchorLink href="#Link Props" title="Link Props"></AnchorLink>
      </AnchorLink>
    </Anchor>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Anchor from '@/components/anchor';
  import AnchorLink from '@/components/anchor-link';

  export default {
    components: {
      Row,
      Col,
      Button,
      Anchor,
      AnchorLink,
    },
    data() {
      return {
        active: '#API',
      };
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
  .article {
    height: 2000px; 
  }
</style>