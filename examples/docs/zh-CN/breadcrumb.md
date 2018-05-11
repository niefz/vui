# Breadcrumb 面包屑

显示当前页面的路径，快速返回之前的任意页面。

## 基础用法

适用广泛的基础用法。

:::demo 在`v-breadcrumb`中使用`v-breadcrumb-item`标签表示从首页开始的每一级。VUI 提供了一个`separator`属性，在`v-breadcrumb`标签中设置它来决定分隔符，它只能是字符串，默认为斜杠`/`。

```html
<v-breadcrumb separator="/">
  <v-breadcrumb-item>首页</v-breadcrumb-item>
  <v-breadcrumb-item :to="{ path: '/zh-CN/components/icon' }">Icon 图标</v-breadcrumb-item>
  <v-breadcrumb-item>Button 按钮</v-breadcrumb-item>
  <v-breadcrumb-item>Grid 栅格</v-breadcrumb-item>
</el-breadcrumb>
```
:::

## 图标分隔符

:::demo 通过设置 `separator-icon` 可使用相应的 `iconfont` 作为分隔符，注意这将使 `separator` 设置失效

```html
<v-breadcrumb separator-icon="icon-arrow-right">
  <v-breadcrumb-item>首页</v-breadcrumb-item>
  <v-breadcrumb-item>Icon 图标</v-breadcrumb-item>
  <v-breadcrumb-item :to="{ path: '/zh-CN/components/button' }">Button 按钮</v-breadcrumb-item>
  <v-breadcrumb-item>Grid 栅格</v-breadcrumb-item>
</v-breadcrumb>
```
:::

## 属性值

Breadcrumb Attributes

| 参数             | 说明              | 类型           | 可选值    | 默认值    |
|----------       |--------------     |----------     |--------  |--------   |
| separator       | 分隔符             | string        | —        | '/'   |
| separator-class | 图标分隔符 class    | string        | —        | -        |

BreadcrumbItem Attributes

| 参数       | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| to        | 路由跳转对象，同 `vue-router` 的 `to` | string/object | — | — |
| replace   | 在使用 to 进行路由跳转时，启用 replace 将不会向 history 添加新记录 | boolean | — | false |

<script>
  import Breadcrumb from '@/components/breadcrumb';
  import BreadcrumbItem from '@/components/breadcrumb-item';

  export default {
    components: {
      VBreadcrumb: Breadcrumb,
      VBreadcrumbItem: BreadcrumbItem,
    },
  };
</script>