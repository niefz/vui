# Alert 警告提示

用于页面中展示重要的提示信息。

## 基础用法

:::demo Alert 组件提供四种主题，由 theme 属性指定，默认值为info。

```html
<Row>
  <Col :span="24">
    <Alert message="默认消息提示" description="Detailed description and advices about successful copywriting.Detailed description and advices about successful copywriting.Detailed description and advices about successful copywriting." show-icon closable></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="success" message="成功消息提示" show-icon closable></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="warning" message="警告消息提示" show-icon closable></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="danger" message="错误消息提示" show-icon closable></Alert>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Alert theme="danger" message="错误消息提示" close-text="知道了" closable></Alert>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Alert from '@/components/alert';

  export default {
    components: {
      Row,
      Col,
      Alert,
    },
    methods: {
    },
  };
</script>