# Exception 异常页

通用异常页。

## 基本用法

:::demo 

```html
<Row>
  <Col>
    <Exception exception="403">
      <template>
        <Button theme="primary">返回首页</Button>
      </template>
    </Exception>
  </Col>
</Row>
<Row>
  <Col>
    <Exception>
      <template>
        <Button theme="primary">返回首页</Button>
      </template>
    </Exception>
  </Col>
</Row>
<Row>
  <Col>
    <Exception exception="500">
      <template>
        <Button theme="primary">返回首页</Button>
      </template>
    </Exception>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Exception from '@/components/exception';

  export default {
    components: {
      Row,
      Col,
      Exception,
      Button,
    },
    methods: {
    },
  };
</script>