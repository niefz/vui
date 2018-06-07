# Empty 空提示

用于页面区块的数据异常状态反馈。

## 何时使用

- 局部数据为空或者异常时。

## 基本用法

:::demo 文本提示。

```html
<Row>
  <Col>
    <Empty description="抱歉，暂无数据！"></Empty>
  </Col>
</Row>
```
:::

## 带图标

:::demo 带有 Icon 能在视觉上更有效的提示用户。特殊情况下，Icon 能够直接代替文本。

```html
<Row>
  <Col>
    <Empty icon=v-icon-empty-o" :font-size="100" description="抱歉，暂无数据！"></Empty>
  </Col>
</Row>
```
:::

## 自定义描述

:::demo 通过 slot 可自定义任何描述内容。

```html
<Row>
  <Col>
    <Empty icon="v-icon-empty-o" :font-size="100">
      <p class="tip">没有收藏的你一定是个假吃货～</p>
      <Button theme="primary">去逛逛</Button>
    </Empty>
  </Col>
</Row>
```
:::

## 填充

:::demo 设置 `fill` 属性可使组件在整个区块中水平、垂直居中。

```html
<Row>
  <Col>
    <div class="empty">
      <Empty icon="v-icon-empty-o" :font-size="100" fill>
        <p class="tip">没有收藏的你一定是个假吃货～</p>
      </Empty>
    </div>
  </Col>
</Row>
```
:::

## API

Empty props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| src | 图片地址 | string | - | - |
| icon | 图标类名 | string | - | - |
| font-size | 图标大小 | number | - | 12 |
| description | 补充描述 | string | - | - |
| fill | 是否占满整个区块 | boolean | - | false |

Empty slot

| 名称 | 说明 |
|---- |---- |
| 无 | 自定义描述内容 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Empty from '@/components/empty';

  export default {
    components: {
      Row,
      Col,
      Button,
      Empty,
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
.empty { height: 300px; }
.tip { padding-bottom: 10px; }
</style>