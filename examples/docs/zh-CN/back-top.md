# BackTop回到顶部

返回页面顶部的操作按钮。

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-backtop></v-backtop>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Backtop from '@/components/backtop';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VBacktop: Backtop,
    },
    methods: {
    },
  };
</script>

<style rel="stylesheet/scss" lang="sass" scoped>
  .article {
    height: 2000px; 
  }
</style>