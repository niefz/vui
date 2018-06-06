# Avatar 头像

用来代表用户或事物，支持图片、图标或字符展示。

## 基本用法

:::demo 提供四种尺寸：`large`、`medium`、`small`、`mini` ，可选 `circle` 和 `square` 两种形状。

```html
<Row>
  <Col :span="3">
    <Avatar icon="v-icon-user" size="large"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user" size="medium"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user" size="mini"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user" size="large" shape="circle"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user" size="medium" shape="circle"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user" shape="circle"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user" size="mini" shape="circle"></Avatar>
  </Col>
</Row>
```
:::

## 类型

:::demo 可以使用 Icon、图片以及字符。

```html
<Row>
  <Col :span="3">
    <Avatar icon="v-icon-user"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
  </Col>
  <Col :span="3">
      <Avatar>USER</Avatar>
  </Col>
</Row>
```
:::

## 带徽标的头像

:::demo 通常用于消息提示。

```html
<Row>
  <Col :span="3">
    <Badge value="1">
      <Avatar icon="v-icon-user"></Avatar>
    </Badge>
  </Col>
  <Col :span="3">
    <Badge dot>
      <Avatar icon="v-icon-user"></Avatar>
    </Badge>
  </Col>
</Row>
```
:::

## API

Avatar props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| size | 头像的大小 | string | `large` `medium` `small` `mini` | small |
| shape | 头像的形状 | string | `circle` `square` | square |
| icon | 头像的图标类 | string | - | - |
| src | 头像的资源地址 | string | - | - |
| alt | 无法显示头像图像时显示的替代文本 | string | - | - |

Avatar slot

| 名称 | 说明 |
|---- |---- |
| 无 | 头像的文本 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Badge from '@/components/badge';
  import Avatar from '@/components/avatar';

  export default {
    components: {
      Row,
      Col,
      Avatar,
      Badge,
    },
    methods: {
    },
  };
</script>