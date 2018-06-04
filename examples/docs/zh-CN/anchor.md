# Anchor 锚点

用于跳转到页面指定位置。

## 何时使用

需要展现当前页面上可供跳转的锚点链接，以及快速在锚点之间跳转。

## 基本用法

:::demo 通过 `affix` 属性控制固定模式。

```html
<Row>
  <Col :span="24">
    <Anchor :affix="false" show-ink>
      <AnchorLink href="#Basic demo" title="Basic demo"></AnchorLink>
      <AnchorLink href="#Fixed demo" title="Fixed demo"></AnchorLink>
      <AnchorLink href="#API" title="API">
        <AnchorLink href="#Anchor Props" title="Anchor Props" disabled></AnchorLink>
        <AnchorLink href="#Link Props" title="Link Props"></AnchorLink>
      </AnchorLink>
    </Anchor>
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

## API

Anchor props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| affix | 固定模式 | boolean | - | true |
| show-ink | 是否显示小圆点 | boolean | - | true |
| top | 距离窗口顶部距离 | number | - | - |
| right | 距离窗口右侧距离 | number | - | - |
| bottom | 距离窗口底部距离 | number | - | - |
| left | 距离窗口左侧距离 | number | - | - |

AnchorLink props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| href | 锚点链接 | string | - | - |
| title | 文字内容 | string | - | - |
| disabled | 是否禁用 | boolean | - | - |

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