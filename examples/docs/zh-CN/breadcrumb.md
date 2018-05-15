# Breadcrumb 面包屑

显示当前页面在系统层级结构中的位置，并能向上返回。

## 何时使用

- 当系统拥有超过两级以上的层级结构时；
- 当需要告知用户『你在哪里』时；
- 当需要向上导航的功能时。

## 基础示例

:::demo 最基础的用法，通过设置 `to` 属性添加链接。

```html
<Breadcrumb>
  <BreadcrumbItem>首页</BreadcrumbItem>
  <BreadcrumbItem :to="{ path: '/zh-CN/components/icon' }">Icon 图标</BreadcrumbItem>
  <BreadcrumbItem>Button 按钮</BreadcrumbItem>
  <BreadcrumbItem>Grid 栅格</BreadcrumbItem>
</el-breadcrumb>
```
:::

## 分隔符

:::demo 通过设置 `separator-icon` 可使用相应的 `icon` 作为分隔符。

```html
<Breadcrumb separator-icon="v-icon-arrow-right-o">
  <BreadcrumbItem>首页</BreadcrumbItem>
  <BreadcrumbItem>Icon 图标</BreadcrumbItem>
  <BreadcrumbItem :to="{ path: '/zh-CN/components/button' }">Button 按钮</BreadcrumbItem>
  <BreadcrumbItem>Grid 栅格</BreadcrumbItem>
</Breadcrumb>
```
:::

## 自定义

:::demo 可自定义每项的内容，比如带有一个图标。

```html
<Breadcrumb separator-icon="v-icon-arrow-right-o">
  <BreadcrumbItem><Icon icon="v-icon-home-o"></Icon> 首页</BreadcrumbItem>
  <BreadcrumbItem>Icon 图标</BreadcrumbItem>
  <BreadcrumbItem :to="{ path: '/zh-CN/components/button' }">Button 按钮</BreadcrumbItem>
  <BreadcrumbItem>Grid 栅格</BreadcrumbItem>
</Breadcrumb>
```
:::

## API

Breadcrumb props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| separator | 文本分隔符 | string | - | \/ |
| separator-icon | 图标分隔符 | string | - | - |

BreadcrumbItem props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| to | 路由跳转对象，同 `vue-router` 的 `to` | string \/ object | - | - |
| replace | 路由跳转时，开启 `replace` 将不会向 history 添加新记录 | boolean | - | false |

<script>
  import Icon from '@/components/icon';
  import Breadcrumb from '@/components/breadcrumb';
  import BreadcrumbItem from '@/components/breadcrumb-item';

  export default {
    components: {
      Icon,
      Breadcrumb,
      BreadcrumbItem,
    },
  };
</script>