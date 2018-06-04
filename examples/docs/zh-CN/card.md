# Card 卡片

通用卡片容器。

## 基本用法

:::demo 

```html
<Row>
  <Col>
    <Card>
      <header slot="header">
        This is header
      </header>
      <div>
        This is content
      </div>
      <footer slot="footer">
        This is footer
      </footer>
    </Card>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Card from '@/components/card';

  export default {
    components: {
      Row,
      Col,
      Card,
    },
    methods: {
    },
  };
</script>