# Spin 加载中

用于页面和区块的加载中状态。

## 基础用法

:::demo 

```html
<Row>
  <Col>
    <Spin tip="拼命加载中"></Spin>
  </Col>
</Row>
<Row>
  <Col>
    <Spin icon="v-icon-loading" tip="拼命加载中"></Spin>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Spin from '@/components/spin';

  export default {
    components: {
      Row,
      Col,
      Spin,
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