# Button 按钮

基础组件，通常用于表单、对话框、菜单上传递用户触发的操作。
  
## 基础按钮

基础按钮分三种：主按钮（实心） 、 次按钮（空心）、 文字按钮
  
:::demo 使用 `type` 属性来定义 Button 的表现形式。

```html
<v-row>
  <v-button type="button" shape="radius" theme="primary">主要按钮</v-button>
  <v-button type="button" shape="radius">次要按钮</v-button>
  <v-button type="text">文字按钮</v-button>
</v-row>
```
:::
  
## 禁用按钮

:::demo 通过添加 `disabled` 属性来达到禁用状态。

```html
<v-row>
  <v-button type="button" shape="radius" theme="primary" disabled>主要按钮</v-button>
  <v-button type="button" shape="radius" disabled>次要按钮</v-button>
  <v-button type="text" disabled>文字按钮</v-button>
</v-row>
```
:::
  
## 主题按钮

按钮的颜色赋予其感情色彩，能给用户带来操作提示。

:::demo 使用 `theme` 属性来定义 Button 的主题。

```html
<v-row>
  <v-button type="button" shape="radius" theme="primary">主要按钮</v-button>
  <v-button type="button" shape="radius" theme="warning">告警按钮</v-button>
  <v-button type="button" shape="radius" theme="danger">危险按钮</v-button>
  <v-button type="button" shape="radius" theme="default">默认按钮</v-button>
</v-row>
<v-row>
  <v-button type="button" shape="radius" theme="primary" plain>主要按钮</v-button>
  <v-button type="button" shape="radius" theme="warning" plain>告警按钮</v-button>
  <v-button type="button" shape="radius" theme="danger" plain>危险按钮</v-button>
  <v-button type="button" shape="radius" theme="default" plain>危险按钮</v-button>
</v-row>
```
:::
  
## 图标、文字按钮

带有 Icon 的按钮，能在视觉上简洁有效的指引用户操作。特殊情况下，使用图标能够代替文本。

:::demo 可设置 `prefix-icon` 、`suffix-icon` 属性，或者在 Button 中内联 icon。

```html
<v-row>
  <v-button type="button" shape="radius" theme="default" prefix-icon="icon-user-plus">添加用户</v-button>
  <v-button type="button" shape="radius" theme="primary" suffix-icon="icon-search">查询</v-button>
  <v-button type="button" shape="radius" theme="default" prefix-icon="icon-user-plus"></v-button>
  <v-button type="button" shape="radius" theme="primary" suffix-icon="icon-search"></v-button>
  <v-button type="button" shape="circle" theme="default" prefix-icon="icon-user-plus"></v-button>
  <v-button type="button" shape="circle" theme="primary" suffix-icon="icon-search"></v-button>
</v-row>
```
:::
  
## 加载状态按钮

:::demo 可通过添加 `loading` 属性，使按钮处于加载中状态。

```html
<v-row>
  <v-button type="button" shape="radius" theme="default" prefix-icon="icon-loading" loading>加载中</v-button>
  <v-button type="button" shape="radius" theme="primary" prefix-icon="icon-loading" loading>加载中</v-button>
  <v-button type="button" shape="radius" theme="default" prefix-icon="icon-loading"></v-button>
  <v-button type="button" shape="circle" theme="default" suffix-icon="icon-loading"></v-button>
</v-row>
```
:::
  
## 组合按钮

可以将多个按钮放进 ButtonGroup 中形成一个组合按钮。

:::demo 

```html
<v-row>
  <v-button-group>
    <v-button type="button" shape="radius" theme="primary">主要操作</v-button>
    <v-button type="button" shape="radius" theme="default">次要操作</v-button>
    <v-button type="button" shape="radius" theme="default" suffix-icon="icon-more"></v-button>
  </v-button-group>
</v-row>
<v-row>
  <v-button-group>
    <v-button type="button" shape="radius" theme="default" prefix-icon="icon-arrow-left" disabled>上一页</v-button>
    <v-button type="button" shape="radius" theme="default" suffix-icon="icon-arrow-right">下一页</v-button>
  </v-button-group>
  <v-button-group disabled>
    <v-button type="button" shape="radius" theme="default" prefix-icon="icon-arrow-left">上一页</v-button>
    <v-button type="button" shape="radius" theme="default" suffix-icon="icon-arrow-right">下一页</v-button>
  </v-button-group>
</v-row>
```
:::
  
## 按钮尺寸

提供四种尺寸：large、medium、small、mini。

:::demo 可通过 `size` 属性配置，默认为 small。

```html
<v-row>
  <v-button type="button" size="large" shape="radius" theme="primary">操作按钮</v-button>
  <v-button type="button" size="medium" shape="radius" theme="primary">操作按钮</v-button>
  <v-button type="button" size="small" shape="radius" theme="primary">操作按钮</v-button>
  <v-button type="button" size="mini" shape="radius" theme="primary">操作按钮</v-button>
</v-row>
<v-row>
  <v-button type="button" size="large" shape="circle" theme="primary" suffix-icon="icon-search"></v-button>
  <v-button type="button" size="medium" shape="circle" theme="primary" suffix-icon="icon-search"></v-button>
  <v-button type="button" size="small" shape="circle" theme="primary" suffix-icon="icon-search"></v-button>
  <v-button type="button" size="mini" shape="circle" theme="primary" suffix-icon="icon-search"></v-button>
</v-row>
<v-row>
  <v-button-group size="large">
    <v-button type="button" shape="radius" theme="default" prefix-icon="icon-arrow-left">上一页</v-button>
    <v-button type="button" shape="radius" theme="default" suffix-icon="icon-arrow-right">下一页</v-button>
  </v-button-group>
  <v-button-group size="medium">
    <v-button type="button" shape="radius" theme="default" prefix-icon="icon-arrow-left">上一页</v-button>
    <v-button type="button" shape="radius" theme="default" suffix-icon="icon-arrow-right">下一页</v-button>
  </v-button-group>
  <v-button-group size="small">
    <v-button type="button" shape="radius" theme="default" prefix-icon="icon-arrow-left">上一页</v-button>
    <v-button type="button" shape="radius" theme="default" suffix-icon="icon-arrow-right">下一页</v-button>
  </v-button-group>
  <v-button-group size="mini">
    <v-button type="button" shape="radius" theme="default" prefix-icon="icon-arrow-left">上一页</v-button>
    <v-button type="button" shape="radius" theme="default" suffix-icon="icon-arrow-right">下一页</v-button>
  </v-button-group>
</v-row>
```
:::

## 属性值

Button Attributes

| 参数          | 说明            | 类型         | 可选值                                  | 默认值   |
|----------    |--------         |----------   |-------------                           |-------- |
| native-type  | 原生 type 属性   | string      | button / submit / reset                | button |  
| type         | 类型            | string      | button  / text                         | button |
| shape        | 形状            | string      | radius  / circle                       | radius |
| theme        | 主题            | string      | default / primary / warning / danger   | default |
| size         | 尺寸            | string      | large / medium / small / mini          | small |
| plain        | 是否朴素按钮     | boolean     | —                                      | false |
| disabled     | 是否禁用状态     | boolean     | —                                      | false |
| loading      | 是否加载中       | boolean      | —                                     | false |
| prefix-icon  | 头部图标        | string      |  —                                     |  —  |
| suffix-icon  | 尾部图标        | string      |  —                                     |  —  |

ButtonGroup Attributes

| 参数          | 说明            | 类型         | 可选值                                  | 默认值   |
|----------    |--------         |----------   |-------------                           |-------- |
| mode         | 模式            | string      |   horizontal / vertical                | vertical |
| size         | 尺寸            | string      | large / medium / small / mini          | small   |
| disabled     | 是否禁用状态     | boolean     | —                                      | false   |


<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import ButtonGroup from '@/components/button-group';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VButtonGroup: ButtonGroup,
    },
  };
</script>