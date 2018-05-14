# Table 表格

## 基础用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Table></Table>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Table from '@/components/table';

  export default {
    components: {
      Row,
      Col,
      Table,
    },
    methods: {
    },
  };
</script>