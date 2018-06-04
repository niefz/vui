# Tree 树形控件

## 基本用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Tree></Tree>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Tree from '@/components/tree';

  export default {
    components: {
      Row,
      Col,
      Tree,
    },
    methods: {
    },
  };
</script>