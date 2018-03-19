# Icon 图标

基础组件，提供了一套常用的图标集合。

## 代码示例

:::demo 通过设置类名 icon 来使用即可。

```html
<div class="v-row">
  <v-icon icon="v-icon-calendar"></v-icon>
  <v-icon icon="v-icon-delete"></v-icon>
  <v-icon icon="v-icon-message"></v-icon>
  <v-icon icon="v-icon-loading"></v-icon>
</div>
```
:::

## 图标集合

<script>
  import Icon from '@/components/icon';

  export default {
    components: {
      VIcon: Icon,
    },
  };
</script>