# Message 全局提示

常用于操作后的反馈提示。

## 基础用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Button @click="openMessage">open message</Button>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Message from '@/components/message';

  export default {
    components: {
      Row,
      Col,
      Button,
    },
    methods: {
      openMessage() {
        Message({
          theme: 'warning',
          message: '警告消息提示',
        });
      },
    },
  };
</script>