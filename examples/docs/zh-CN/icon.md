# Icon 图标

基础组件，提供了一套常用的图标集合。

## 代码示例

:::demo 通过设置类名 icon 来使用即可。

```html
<v-row>
  <v-icon icon="v-icon-calendar"></v-icon>
  <v-icon icon="v-icon-delete"></v-icon>
  <v-icon icon="v-icon-message"></v-icon>
  <v-icon icon="v-icon-loading"></v-icon>
</v-row>
```
:::

## 图标集合

<v-row class="icons">
  <v-col :span="4">
    <v-icon icon="v-icon-calendar"></v-icon>
    <p>v-icon-calendar</p>
  </v-col>
  <v-col :span="4">
    <v-icon icon="v-icon-delete"></v-icon>
    <p>v-icon-delete</p>
  </v-col>
  <v-col :span="4">
    <v-icon icon="v-icon-message"></v-icon>
    <p>v-icon-message</p>
  </v-col>
  <v-col :span="4">
    <v-icon icon="v-icon-loading"></v-icon>
    <p>v-icon-loading</p>
  </v-col>
</v-row>

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Icon from '@/components/icon';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VIcon: Icon,
    },
  };
</script>
<style lang="scss" scoped>
.icons {
  .v-icon {
    font-size: 30px;
    text-align: center;
    width: 100%
  }
  p {
    text-align: center;
  }
}
</style>