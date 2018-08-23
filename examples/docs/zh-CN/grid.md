# Grid 栅格

24 栅格系统。

## 概述

布局的栅格化系统，我们是基于行（row）和列（col）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

- 通过 `row` 在水平方向建立一组 `column`（简写col）
- 你的内容应当放置于 `col` 内，并且只有 `col` 可以作为 `row` 的直接元素
- 栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 `.col-8` 来创建
- 如果一个 `row` 中的 `col` 总和超过 24，那么多余的 `col` 会作为一个整体另起一行排列

## Flex 布局

我们的栅格化系统支持 Flex 布局，允许子元素在父节点内的水平对齐方式 - 居左、居中、居右、等宽排列、分散排列。子元素与子元素之间，支持顶部对齐、垂直居中对齐、底部对齐的方式。同时，支持使用 order 来定义元素的排列顺序。

Flex 布局是基于 24 栅格来定义每一个『盒子』的宽度，但排版则不拘泥于栅格。

## 基础栅格
  
:::demo 使用单一的一组 `Row` 和 `Col` 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 `Row` 内。

```html
<Row>
  <Col :span="24">
    <div class="gutter-box">col-24</div>
  </Col>
</Row>
<Row>
  <Col :span="12">
    <div class="gutter-box">col-12</div>
  </Col>
  <Col :span="12">
    <div class="gutter-box">col-12</div>
  </Col>
</Row>
<Row>
  <Col :span="8">
    <div class="gutter-box">col-8</div>
  </Col>
  <Col :span="8">
    <div class="gutter-box">col-8</div>
  </Col>
  <Col :span="8">
    <div class="gutter-box">col-8</div>
  </Col>
</Row>
<Row>
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
</Row>
```
:::

## 区块间隔
  
:::demo 栅格常常需要和间隔进行配合，你可以使用 `Row` 的 `gutter` 属性，我们推荐使用 `(16+8n)px` 作为栅格间隔（n 是自然数）。如果要支持响应式，可以写成 { xs: 8, sm: 16, md: 24, lg: 32 }。

```html
<Row :gutter="16">
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
</Row>
```
:::

## 左右偏移
  
:::demo 使用 `offset` 可以将列向右侧偏。例如，`:offset="6"` 将元素向右侧偏移了 6 个列（column）的宽度。

```html
<Row :gutter="16">
  <Col :span="6">
    <div class="gutter-box">col-6</div>
  </Col>
  <Col :span="6" :offset="6">
    <div class="gutter-box">col-6 col-offset-6</div>
  </Col>
</Row>
```
:::

## 栅格排序
  
:::demo 通过使用 `push` 和 `pull` 类就可以很容易的改变列（column）的顺序。

```html
<Row>
  <Col :span="18" :push="6">
    <div class="gutter-box">col-18 col-push-6</div>
  </Col>
  <Col :span="6" :pull="18">
    <div class="gutter-box">col-6 col-pull-18</div>
  </Col>
</Row>
```
:::

## Flex 布局
  
:::demo 设定 `flex` 属性，可以关闭、启用 flex 布局。其子元素根据不同的 `justify` 值 `start`、`center`、`end`、`space-between`、`space-around` 来呈现水平排版方式。

```html
<Row justify="start" flex>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
</Row>
<Row justify="end" flex>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
</Row>
<Row justify="space-between" flex>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
</Row>
```
:::

## Flex 对齐
  
:::demo Flex 子元素垂直对齐方式，`align` 的值：`top`、`middle`、`bottom`。

```html
<Row justify="center" align="top" flex>
  <Col :span="4">
    <div class="gutter-box h100">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box h100">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
</Row>
<Row justify="space-around" align="middle" flex>
  <Col :span="4">
    <div class="gutter-box h100">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box h100">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
</Row>
<Row justify="space-between" align="bottom" flex>
  <Col :span="4">
    <div class="gutter-box h100">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box h100">col-4</div>
  </Col>
  <Col :span="4">
    <div class="gutter-box">col-4</div>
  </Col>
</Row>
```
:::

## Flex 排序
  
:::demo 通过 Flex 布局的 `order` 来改变元素的排序。

```html
<Row justify="start" flex>
  <Col :span="6" :order="4">
    <div class="gutter-box">1 col-6</div>
  </Col>
  <Col :span="6" :order="3">
    <div class="gutter-box">2 col-6</div>
  </Col>
  <Col :span="6" :order="2">
    <div class="gutter-box">3 col-6</div>
  </Col>
  <Col :span="6" :order="1">
    <div class="gutter-box">4 col-6</div>
  </Col>
</Row>
```
:::

## 响应式布局
  
:::demo 参照 Bootstrap 的 [响应式设计](http://getbootstrap.com/css/#grid-media-queries)，预设六个响应尺寸：`xs`、`sm`、`md`、`lg`、`xl` 和 `xxl`。

```html
<Row>
  <Col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="gutter-box">col</div>
  </Col>
  <Col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="gutter-box">col</div>
  </Col>
  <Col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
    <div class="gutter-box">col</div>
  </Col>
  <Col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
    <div class="gutter-box">col</div>
  </Col>
</Row>
```
:::

## API

Row props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| gutter | 栅格间隔 | number | - | 0 |
| flex | 是否 flex 布局 | boolean | - | false |
| justify | flex 布局下的水平排列方式 | string | `top` `middle` `bottom` | top |
| align | flex 布局下的垂直对齐方式 | string | `start` `center` `end` `space-around` `space-between` | start |

Col props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| span | 栅格占位格数 | number | - | 24 |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格 | number | - | 0 |
| pull | 栅格向左移动格数 | number | - | 0 |
| push | 栅格向右移动格数 | number | - | 0 |
| order | 栅格顺序，`flex` 布局模式下有效 | number | - | 0 |
| xs | <576px 响应式栅格 | number \| object | - | - |
| sm | ≥576px 响应式栅格 | number \| object | - | - |
| md | ≥768px 响应式栅格 | number \| object | - | - |
| lg | ≥992px 响应式栅格 | number \| object | - | - |
| xl | ≥1200px 响应式栅格 | number \| object | - | - |
| xxl | ≥1600px 响应式栅格 | number \| object | - | - |
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';

  export default {
    components: {
      Row,
      Col,
    },
  };
</script>
<style lang="scss" scoped>
.h100 {
  height: 100px;
}
a {
  color: #1890ff;
}
.v-row, .v-row--flex {
  [class^=v-col-] {
    margin-top: 8px;
    margin-bottom: 8px;
    color: #ffffff;
    text-align: center;
    .gutter-box {
      padding: 16px 0;
      background-color: #40a9ff;
    }
    &:nth-child(odd) {
      .gutter-box {
        background-color: #1890ff;
      }
    }
  }
}
</style>