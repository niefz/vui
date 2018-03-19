# Button 按钮

基础组件，用于常用的按钮操作。
  
## 代码示例

基础的按钮用法。
  
:::demo 使用`type`、`shape`、`theme`、`size`和`plain`属性来定义 Button 的样式。

```html
<div class="v-row">
  <v-button type="button" shape="radius" theme="default">Default</v-button>
  <v-button type="button" shape="radius" theme="primary">Primary</v-button>
  <v-button type="button" shape="radius" theme="warning">Warning</v-button>
  <v-button type="button" shape="radius" theme="danger">Danger</v-button>
</div>

<div class="v-row">
  <v-button type="button" shape="radius" theme="default" disabled>Default</v-button>
  <v-button type="button" shape="radius" theme="primary" disabled>Primary</v-button>
  <v-button type="button" shape="radius" theme="warning" disabled>Warning</v-button>
  <v-button type="button" shape="radius" theme="danger" disabled>Danger</v-button>
</div>

<div class="v-row">
  <v-button type="button" shape="radius" theme="default" plain>Default</v-button>
  <v-button type="button" shape="radius" theme="primary" plain>Primary</v-button>
  <v-button type="button" shape="radius" theme="warning" plain>Warning</v-button>
  <v-button type="button" shape="radius" theme="danger" plain>Danger</v-button>
</div>

<div class="v-row">
  <v-button type="button" shape="radius" theme="default" plain disabled>Default</v-button>
  <v-button type="button" shape="radius" theme="primary" plain disabled>Primary</v-button>
  <v-button type="button" shape="radius" theme="warning" plain disabled>Warning</v-button>
  <v-button type="button" shape="radius" theme="danger" plain disabled>Danger</v-button>
</div>
```
:::

## 属性值

Button props

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

ButtonGroup props

| 参数       | 说明     | 类型        | 可选值                            | 默认值   |
|---------- |--------  |----------   |-------------                    |-------- |
| mode      | 模式     | string      |   horizontal / vertical             |    vertical     |


<script>
  import Button from '@/components/button';
  import ButtonGroup from '@/components/button-group';

  export default {
    components: {
      VButton: Button,
      VButtonGroup: ButtonGroup,
    },
  };
</script>