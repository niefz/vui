# Card 卡片

通用卡片容器。

## 基础用法

:::demo 

```html
<v-row>
  <v-col>
    <v-spin tip="拼命加载中"></v-spin>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Spin from '@/components/spin';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VSpin: Spin,
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
  .v-col-24 {
    height: 100px; 
  }
</style>