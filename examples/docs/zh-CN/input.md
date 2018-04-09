# Input 输入框

基础用法。

:::demo 使用 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```html
<v-row>
  <v-col :span="12">
    <v-input suffix-icon="v-icon-calendar" @suffix-click="handleSuffix"></v-input>
  </v-col>
  <v-col :span="12">
    <v-input prefix-icon="v-icon-calendar"></v-input>
  </v-col>
</v-row>
```
:::
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Input from '@/components/input';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VInput: Input,
    },
    methods: {
      handleSuffix() {
        console.log(1);
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="sass" scoped>

</style>