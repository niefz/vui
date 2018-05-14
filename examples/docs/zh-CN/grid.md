# Grid 栅格

基础栅格。
  
:::demo 使用 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```html
<Row>
  <Col :span="12">col-12</Col>
  <Col :span="12">col-12</Col>
</Row>
<Row>
  <Col :span="8">col-8</Col>
  <Col :span="8">col-8</Col>
  <Col :span="8">col-8</Col>
</Row>
<Row>
  <Col :span="6">col-6</Col>
  <Col :span="6">col-6</Col>
  <Col :span="6">col-6</Col>
  <Col :span="6">col-6</Col>
</Row>
```
:::
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';

  export default {
    components: {
      Row,
      Col,
    },
  };
</script>
<style lang="scss" scoped>
.v-row, .v-row--flex {
  > div {
    min-height: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 16px 0;
    background-color: #40A9FF;
    color: #FFFFFF;
    text-align: center;
    &:nth-child(odd) {
      background-color: #1890FF;
    }
  }
}
</style>