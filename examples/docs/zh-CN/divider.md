# Divider 分割线

区隔内容的分割线。

## 何时使用

- 对不同章节的文本段落进行分割。
- 对行内文字/链接进行分割，例如表格的操作列。

## 水平分割线

:::demo 默认为水平分割线，可在中间加入文字。

```html
<Row>
  <Col :span="24">
    分割线<Divider></Divider>分割线<Divider dashed></Divider>分割线
  </Col>
</Row>
```
:::

## 垂直分割线

:::demo 使用 `mode="vertical"` 设置为行内的垂直分割线。

```html
<Row>
  <Col :span="24">
    分割线<Divider mode="vertical"></Divider>分割线<Divider mode="vertical" dashed></Divider>分割线
  </Col>
</Row>
```
:::

## 标题位置

:::demo 分割线标题的位置。

```html
<Row>
  <Col :span="24">
    <Divider align="left">分割线</Divider>
    <Divider align="center">分割线</Divider>
    <Divider align="right">分割线</Divider>
  </Row>
</Row>
```
:::

## API

Divider props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| mode | 水平还是垂直类型 | string | `horizontal` `horizontal vertical` | horizontal |
| dashed | 是否虚线 | boolean | - | false |
| align | 分割线标题的位置 | `left` `center` `right` | - | center |

Divider slot

| 名称 | 说明 |
|---- |---- |
| 无 | 分割线标题 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Divider from '@/components/divider';

  export default {
    components: {
      Row,
      Col,
      Divider,
    },
  };
</script>