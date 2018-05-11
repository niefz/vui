# Icon 图标

基础组件，提供了一套常用的图标集合。

## 代码示例

:::demo 通过设置类名 icon 来使用即可。

```html
<v-row>
  <v-icon icon="icon-calendar"></v-icon>
  <v-icon icon="icon-delete"></v-icon>
  <v-icon icon="icon-message"></v-icon>
  <v-icon icon="icon-loading"></v-icon>
</v-row>
```
:::

## 图标集合

<v-row class="icons">
  <v-col :span="4">
    <v-icon icon="icon-calendar"></v-icon>
    <p>icon-calendar</p>
  </v-col>
  <v-col :span="4">
    <v-icon icon="icon-delete"></v-icon>
    <p>icon-delete</p>
  </v-col>
  <v-col :span="4">
    <v-icon icon="icon-message"></v-icon>
    <p>icon-message</p>
  </v-col>
  <v-col :span="4">
    <v-icon icon="icon-loading"></v-icon>
    <p>icon-loading</p>
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