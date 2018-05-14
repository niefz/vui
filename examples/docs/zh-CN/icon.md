# Icon 图标

语义化的矢量图形。

## 图标的命名规范

我们为每个图标赋予了语义化的命名，命名规则如下:

- 实心和描线图标保持同名，用 `-o` 来区分，比如 `question-circle`（实心） 和 `question-circle-o`（描线）；
- 命名顺序：`[图标名]-[形状?]-[描线?]-[方向?]`。

> `?` 为可选。

## 如何使用

:::demo 使用 `<Icon />` 标签声明组件，指定图标对应的 `icon` 属性。

```html
<Row>
  <Icon icon="v-icon-calendar"></Icon>
</Row>
```
:::

## 图标集合

<Row class="icons">
  <Col :span="4">
    <Icon icon="v-icon-calendar"></Icon>
    <p>v-icon-calendar</p>
  </Col>
  <Col :span="4">
    <Icon icon="v-icon-delete"></Icon>
    <p>v-icon-delete</p>
  </Col>
  <Col :span="4">
    <Icon icon="v-icon-message"></Icon>
    <p>v-icon-message</p>
  </Col>
  <Col :span="4">
    <Icon icon="v-icon-loading"></Icon>
    <p>v-icon-loading</p>
  </Col>
</Row>

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Icon from '@/components/icon';

  export default {
    components: {
      Row,
      Col,
      Icon,
    },
  };
</script>
<style lang="scss" scoped>
.icons {
  [class^=v-icon-] {
    font-size: 30px;
    text-align: center;
    width: 100%
  }
  p {
    text-align: center;
  }
}
</style>