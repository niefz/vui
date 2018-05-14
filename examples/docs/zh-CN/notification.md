# Notification 通知提醒

## 基础用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Button @click="notification">notification</Button>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Notify from '@/components/notification';

  export default {
    components: {
      Row,
      Col,
      Button,
    },
    methods: {
      notification() {
        Notify({
          theme: 'warning',
          title: '警告提示',
        });
      },
    },
  };
</script>