# Alert 警告提示

用于页面中展示重要的提示信息。

## 何时使用

- 当某个页面需要向用户显示警告的信息时。
- 非浮层的静态展现形式，始终展现，不会自动消失，用户可以点击关闭。

## 基础示例

:::demo 最简单的用法，适用于简短的警告提示。

```html
<Row>
  <Col :span="24">
    <Alert message="默认消息提示"></Alert>
  </Col>
</Row>
```
:::

## 主题

:::demo Alert 提供四种主题 `info`、`success`、`warning`、`error`，由 `theme` 属性指定，默认 `info`。

```html
<Row>
  <Col :span="24">
    <Alert message="默认消息提示"></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="success" message="成功消息提示"></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="warning" message="警告消息提示"></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="danger" message="错误消息提示"></Alert>
  </Col>
</Row>
```
:::

## 辅助性文字

:::demo 通过 `description` 属性可为 Alert 添加辅助性的文字介绍。

```html
<Row>
  <Col :span="24">
    <Alert message="默认消息提示" description="Detailed description and advices about successful copywriting.Detailed description and advices about successful copywriting.Detailed description and advices about successful copywriting."></Alert>
  </Col>
</Row>
```
:::

## 图标

:::demo 设置 `show-icon` 属性可显示警告图标，并可结合 `icon` 属性自定义，这能更有效地向用户提示你的警告类型。

```html
<Row>
  <Col :span="24">
    <Alert message="默认消息提示" show-icon></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="success" message="成功消息提示" show-icon></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="warning" message="警告消息提示" show-icon></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="danger" message="错误消息提示" show-icon></Alert>
  </Col>
</Row>
```
:::

## 可关闭

:::demo `closable` 属性决定是否可关闭，设置 `close` 事件来触发关闭时的回调。

```html
<Row>
  <Col :span="24">
    <Alert message="默认消息提示" show-icon closable></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="success" message="成功消息提示" show-icon closable></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="warning" message="警告消息提示" show-icon closable></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="danger" message="错误消息提示" show-icon closable></Alert>
  </Col>
</Row>
```
:::

## 自定义关闭

:::demo 自定义的 `close-text` 文本会替换原先的关闭 `Icon`。

```html
<Row>
  <Col :span="24">
    <Alert theme="danger" message="错误消息提示" close-text="知道了" closable></Alert>
  </Col>
</Row>
```
:::

## API

Alert props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| theme | 警告样式 | string | `info`，`success` `warning` `error` | info |
| message | 警告内容 | string | - | - |
| description | 警告提示的辅助性文字介绍 | string | - | - |
| icon | 自定义图标，`show-icon` 为 `true` 时有效 | string | - | - |
| showIcon | 是否显示警告图标 | boolean | - | false |
| closeText | 自定义关闭文本 | string | - | - |
| closable | 是否显示关闭按钮 | boolean | - | false |

Alert events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| close | 关闭 alert 时触发的事件 | - |

Alert slot

| 名称 | 说明 |
|---- |---- |
| 无 | 警告内容 |
| desc | 警告提示的辅助性文字介绍 |


<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Alert from '@/components/alert';

  export default {
    components: {
      Row,
      Col,
      Alert,
    },
    methods: {
    },
  };
</script>