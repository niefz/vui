# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 何时使用

在操作需要较长时间才能完成时，为用户显示该操作的当前进度和状态。

- 当一个操作会打断当前界面，或者需要在后台运行，且耗时可能超过2秒时；
- 当需要显示一个操作完成的百分比时。

## 线形进度条 — 文本外显

:::demo `percentage` 属性(**必填**)控制进度条对应的百分比，必须在 0 - 100 之间。

```html
<Row>
  <Col :span="24">
    <Progress :percentage="30"></Progress>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Progress :percentage="75"></Progress>
  </Col>
</Row>
```
:::

## 线形进度条 — 文本内置

:::demo 设置 `text-inside` 属性将进度条描述置于进度条内部。

```html
<Row>
  <Col :span="24">
    <Progress :stroke-width="16" :percentage="30" text-inside></Progress>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Progress :stroke-width="16" :percentage="75" text-inside></Progress>
  </Col>
</Row>
```
:::

## 环形进度条

:::demo 指定 `shape="circle"` 使用环形进度条。

```html
<Row>
  <Col :span="24">
    <Progress shape="circle" :percentage="50"></Progress>
  </Col>
</Row>
```
:::

## 仪表盘

:::demo 指定 `shape="dashboard"` 实现仪表盘样式的进度条。

```html
<Row>
  <Col :span="24">
    <Progress shape="dashboard" :percentage="75"></Progress>
  </Col>
</Row>
```
:::

## 分段进度条

:::demo 通过 `success-percent` `exception-percent` 对应的百分比，可实现分段的进度条。

```html
<Row>
  <Col :span="24">
    <Progress :percentage="75" :success-percent="30"></Progress>
  </Col>
</Row>
```
:::

## 当前状态

:::demo 通过 `status` 属性指定进度条当前状态。

```html
<Row>
  <Col :span="24">
    <Progress :percentage="50" status="active"></Progress>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Progress :percentage="100" status="exception" icon="v-icon-error"></Progress>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Progress :percentage="100" status="success" icon="v-icon-success"></Progress>
  </Col>
</Row>
```
:::

## 隐藏文本

:::demo 使用 `hide-info` 隐藏进度条文本内容。

```html
<Row>
  <Col :span="24">
    <Progress :percentage="50" hide-info></Progress>
  </Col>
</Row>
```
:::

## 自定义文本

:::demo 自定义显示内容。

```html
<Row>
  <Col :span="24">
    <Progress :percentage="50">50 Days</Progress>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Progress shape="circle" :percentage="75" :text-size="20">75 Days</Progress>
  </Col>
</Row>
```
:::

## API

Progress props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| shape | 进度条类型 | string | `line` `circle` `dashboard` | line |
| percentage | 百分比（必填） | number | 0-100 | 0 |
| stroke-width | 进度条的宽度，单位 px | number | - | 6 |
| width | 环形进度条画布宽度（只在 `circle` `dashboard` 时可用） | number | - | 120 |
| icon | 自定义图标，`show-icon` 为 `true` 时有效 | string | - | - |
| status | 进度条当前状态 | string | normal \/ active \/ success \/ exception | normal |
| textSize | 进度条文本内容字体大小 | number | - | 12 |
| text-inside | 进度条显示文本内置在进度条内（只在 shape="line" 时可用） | boolean | - | false |
| hide-info | 是否隐藏进度条文本内容 | boolean | - | false |

Progress slot

| 名称 | 说明 |
|---- |---- |
| 无 | 进度条文本内容 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Progress from '@/components/Progress';

  export default {
    components: {
      Row,
      Col,
      Progress,
    },
  };
</script>