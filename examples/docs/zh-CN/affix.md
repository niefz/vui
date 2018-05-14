# Affix 固钉

将页面元素钉在可视范围。

## 基础用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Affix :top="80" :right="100" affix>
      <Button>固定</Button>
    </Affix>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Affix :top="80" :left="200">
      <Button>固定</Button>
    </Affix>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Affix :bottom="10" affix>
      <Button>固定</Button>
    </Affix>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Affix from '@/components/affix';

  export default {
    components: {
      Row,
      Col,
      Button,
      Affix,
    },
  };
</script>
<style lang="scss" scoped>
  .article {
    height: 2000px; 
  }
</style>