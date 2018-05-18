# Pagination 分页

采用分页的形式分隔长列表，每次只加载一个页面。

## 何时使用

- 当加载/渲染所有数据将花费很多时间时；

- 可切换页码浏览数据。

## 基础分页

:::demo 基本的分页，页数过多时会自动折叠。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
</Row>
```
:::

## 页码按钮数

:::demo 基本的分页，页数过多时会自动折叠。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      :pager-count="5"
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
</Row>
```
:::

## 总数

:::demo 通过设置 `showTotal` 展示总共有多少数据。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      show-total
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
```
:::

## 分页大小

:::demo 基本的分页，页数过多时会自动折叠。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      show-size-changer
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
```
:::

## 跳转

:::demo 快速跳转到某一页。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      show-jumper
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
```
:::

## 简洁

:::demo 简单的分页。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      simple
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
```
:::

## 迷你型

:::demo 迷你版翻页。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      minimal
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
```
:::

## 禁用

:::demo 禁用分页。

```html
<Row>
  <Col :span="24">
    <Pagination
      :total="100"
      disabled
      @size-change="handleSizeChange"
      @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
```
:::

## API

Pagination props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| size | 尺寸 | string | `large` `medium` `small` `mini` | small |
| align | 对齐方式 | string | `left` `center` `right` | left |
| page-size-options | 分页大小配置 | Array | - | [10, 20, 30, 40, 50] |
| prev-text | 向上翻页文本 | string | - | 上一页 |
| next-text | 向下翻页文本 | string | - | 下一页 |
| pager-count | 页码按钮的显示数量，当总页数超过该值时会折叠 | Number | ≥ 5 的奇数 | 7 |
| current-page | 当前页码，支持 .sync 修饰符 | Number | - | 1 |
| page-size | 分页大小 | Number | - | 10 |
| total | 总数 | Number | - | 0 |
| show-total | 是否显示总数 | Boolean | - | false |
| show-size-changer | 是否显示分页大小切换 | Boolean | - | false |
| show-jumper | 是否显示跳转 | Boolean | - | false |
| simple | 添加该属性，显示为简单分页 | Boolean | - | false |
| minimal | 添加该属性，显示为迷你版翻页 | Boolean | - | false |
| disabled | 禁用分页 | Boolean | - | false |

Pagination slot

| 名称 | 说明 |
|---- |---- |
| prev | 自定义的上一页
| next | 自定义的下一页

Pagination events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| page-change | 页码改变时的回调，返回改变后的页码 | 页码 |
| size-change | 切换分页大小时的回调，返回切换后的每页条数 | 每页条数 |


<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Pagination from '@/components/pagination';

  export default {
    components: {
      Row,
      Col,
      Pagination,
    },
    methods: {
      handleSizeChange(val) {
        console.log(val);
      },
      handlePageChange(val) {
        console.log(val);
      },
    },
  };
</script>