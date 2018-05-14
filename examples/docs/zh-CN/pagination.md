# Pagination 分页

## 基础用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Pagination :total="100" @size-change="handleSizeChange" @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Pagination :pager-count="5" :total="100" @size-change="handleSizeChange" @page-change="handlePageChange"></Pagination>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Pagination :total="100" simple></Pagination>
  </Col>
<Row>
  <Col :span="24">
    <Pagination :total="100" minimal></Pagination>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Pagination from '@/components/pagination';

  export default {
    components: {
      Row,
      Col,
      Pagination,
    },
    methods: {
      handleSizeChange(val) {
        console.log(val);
      },
      handlePageChange(val) {
        console.log(val);
      },
    },
  };
</script>