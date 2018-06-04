# Badge 徽标

用于标记。

## 基本用法

:::demo 定义value属性，它接受Number或者String。

```html
<Row>
  <Col :span="4">
    <Badge :value="20" :max="10">
      <Button>标签二</Button>
    </Badge>
  </Col>
  <Col :span="4">
    <Badge :value="20" dot>
      <Button>标签二</Button>
    </Badge>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Badge from '@/components/badge';

  export default {
    components: {
      Row,
      Col,
      Button,
      Badge,
    },
    methods: {
    },
  };
</script>