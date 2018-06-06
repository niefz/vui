# Badge 徽标

图标右上角的圆形徽标数字。

## 何时使用

一般出现在通知图标或头像的右上角，用于显示需要处理的消息条数，通过醒目视觉形式吸引用户处理。

## 基本用法

:::demo 简单的徽章展示。

```html
<Row>
  <Col :span="4">
    <Badge :value="5">
      <Button>标签二</Button>
    </Badge>
  </Col>
  <Col :span="4">
    <Badge :value="0">
      <Button>标签二</Button>
    </Badge>
  </Col>
</Row>
```
:::

## 封顶数字

:::demo 超过 `max` 时，显示为 `${max}+`。

```html
<Row>
  <Col :span="4">
    <Badge :value="25" :max="10">
      <Button>标签二</Button>
    </Badge>
  </Col>
  <Col :span="4">
    <Badge :value="100" :max="99">
      <Button>标签二</Button>
    </Badge>
  </Col>
</Row>
```
:::

## 独立使用

:::demo 不包裹任何元素即是独立使用。

```html
<Row>
  <Col :span="4">
    <Badge :value="100" :max="99"></Badge>
  </Col>
  <Col :span="4">
    <Badge :value="5"></Badge>
  </Col>
  <Col :span="4">
    <Badge dot></Badge>
  </Col>
</Row>
```
:::

## 状态点

:::demo 用于表示状态的小圆点。

```html
<Row>
  <Col :span="4">
    <Badge status="default" text="Default"></Badge>
  </Col>
  <Col :span="4">
    <Badge status="processing" text="Processing"></Badge>
  </Col>
  <Col :span="4">
    <Badge status="success" text="Success"></Badge>
  </Col>
  <Col :span="4">
    <Badge status="warning" text="Warning"></Badge>
  </Col>
  <Col :span="4">
    <Badge status="error" text="Error"></Badge>
  </Col>
</Row>
```
:::

## 讨嫌的小红点

:::demo 不显示具体的数字。

```html
<Row>
  <Col :span="4">
    <Badge dot>
      <Button>标签二</Button>
    </Badge>
  </Col>
  <Col :span="4">
    <Badge dot>
      <Icon icon="v-icon-user-o" :font-size="16"></Icon>
    </Badge>
  </Col>
  <Col :span="4">
    <Badge dot>
      <a>可以是一个链接</a>
    </Badge>
  </Col>
</Row>
```
:::

## API

Badge props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| value | 展示的值 | string \/ object \/ number | - | - |
| max | 徽标数字大于该值时，显示为 `${max}+` | string | - |
| dot | 不展示徽标文本，只有一个小红点 | boolean | - | false |
| status | 设置 Badge 为状态点 | string | `default` `processing` `success` `error` `warning` | - |
| text | 在设置了 `status` 的前提下有效，状态点的文本 | string | - | - |

Avatar slot

| 名称 | 说明 |
|---- |---- |
| 无 | 徽标的文本 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Icon from '@/components/icon';
  import Badge from '@/components/badge';

  export default {
    components: {
      Row,
      Col,
      Button,
      Icon,
      Badge,
    },
    methods: {
    },
  };
</script>