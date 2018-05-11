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

带有 Icon 的按钮，视觉上能首当其冲的体现其功能意向。

:::demo 可设置 `prefix-icon` 、`suffix-icon` 属性，或者在 Button 中内联 icon。

```html
<v-row>
  <v-button type="button" shape="radius" theme="default" prefix-icon="icon-download">默认按钮</v-button>
  <v-button type="button" shape="radius" theme="primary">主要按钮</v-button>
  <v-button type="button" shape="radius" theme="warning">告警按钮</v-button>
  <v-button type="button" shape="radius" theme="danger">危险按钮</v-button>
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

| 参数       | 说明     | 类型        | 可选值                            | 默认值   |
|---------- |--------  |----------   |-------------                    |-------- |
| mode      | 模式     | string      |   horizontal / vertical             |    vertical     |


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