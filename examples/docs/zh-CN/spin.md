# Spin 加载中

用于页面和区块的加载中状态。

## 何时使用

页面局部处于等待异步数据或正在渲染过程时，合适的加载动效会有效缓解用户的焦虑。

## 基本用法

:::demo 一个简单的 loading 状态。

```html
<Row>
  <Col>
    <Spin></Spin>
  </Col>
</Row>
```
:::

## 加载文案

:::demo 显示在 loading 图标下方的加载文案。

```html
<Row>
  <Col>
    <Spin tip="拼命加载中"></Spin>
  </Col>
</Row>
```
:::

## 自定义

:::demo 可自定义加载图标和背景色。

```html
<Row>
  <Col>
    <Spin tip="拼命加载中" icon="v-icon-loading" background="rgba(0, 0, 0, .4)"></Spin>
  </Col>
</Row>
```
:::

## API

Spin props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| tip | 加载文案 | string | - | - |
| icon | 自定义加载图标类名 | string | - | - |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Spin from '@/components/spin';

  export default {
    components: {
      Row,
      Col,
      Spin,
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
  .v-col-24 {
    height: 100px; 
  }
</style>