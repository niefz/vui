# Tooltip 文字提示

用来代替系统默认的 title 提示，提供一个 `按钮/文字/操作` 的文案解释。

## 何时使用

- 鼠标移入则显示提示，移出消失，气泡浮层不承载复杂文本和操作。

## 基本用法

:::demo 最简单的用法。

```html
<Row>
  <Col> 
    <Tooltip content="这里是提示文字">
      当鼠标经过这段文字时，会显示一个气泡框
    </Tooltip>
  </Col>
</Row>
```
:::

## 位置

:::demo 组件提供了12个不同的方向显示，具体配置可查看 API。

```html
<Row>
  <Col :span="8">
    <Tooltip placement="top-start" content="这里是提示文字">
      <Button>Top Start</Button>
    </Tooltip>
  </Col>
  <Col :span="8">
    <Tooltip placement="bottom" content="这里是提示文字">
      <Button>Bottom</Button>
    </Tooltip>
  </Col>
  <Col :span="8">
    <Tooltip placement="right" content="这里是提示文字">
      <Button>Right</Button>
    </Tooltip>
  </Col>
</Row>
```
:::

## 风格

:::demo Tooltip 组件提供了两个不同的主题：`dark` 和 `light`。

```html
<Row>
  <Col :span="8">
    <Tooltip content="这里是提示文字">
      <Button>Dark</Button>
    </Tooltip>
  </Col>
  <Col :span="8">
    <Tooltip theme="light" content="这里是提示文字">
      <Button>Light</Button>
    </Tooltip>
  </Col>
</Row>
```
:::

## API

Tooltip props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| transition | 渐变动画 | string | - | fade-in-linear |
| placement | 出现位置 | string | `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end` | top |
| theme | 风格 | string | `dark` `light` | dark |
| content | 显示的内容，也可以通过 slot 传入 DOM | string | - | - |
| open-delay | 显示延迟，单位为毫秒 | number | - | false |
| hide-delay | 关闭延迟，单位为毫秒 | number | - | false |
| disabled | Tooltip 是否可用 | boolean | - | false |

Tooltip slot

| 名称 | 说明 |
|---- |---- |
| 无 | 触发 Tooltip 显示的 HTML 元素 |
| content | 自定义的显示内容 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Tooltip from '@/components/tooltip';
  import Button from '@/components/button';

  export default {
    components: {
      Row,
      Col,
      Button,
      Tooltip,
    },
  };
</script>
<style lang="scss" scoped>
</style>