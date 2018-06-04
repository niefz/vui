# BackTop 回到顶部

返回页面顶部的操作按钮。

## 基本用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Backtop></Backtop>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Backtop from '@/components/backtop';

  export default {
    components: {
      Row,
      Col,
      Backtop,
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  .article {
    height: 2000px; 
  }
</style>