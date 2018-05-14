# Avatar 头像

用于头像。

## 基础用法

:::demo 定义value属性，它接受Number或者String。

```html
<Row>
  <Col :span="3">
    <Avatar icon="v-icon-user"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar icon="v-icon-user" shape="circle"></Avatar>
  </Col>
  <Col :span="3">
    <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" shape="circle"></Avatar>
  </Col>
  <Col :span="3">
    <Badge value="1">
      <Avatar icon="v-icon-user"></Avatar>
    </Badge>
  </Col>
  <Col :span="3">
    <Badge dot>
      <Avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></Avatar>
    </Badge>
  </Col>
  <Col :span="3">
    <Badge dot>
      <Avatar>USER</Avatar>
    </Badge>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Badge from '@/components/badge';
  import Avatar from '@/components/avatar';

  export default {
    components: {
      Row,
      Col,
      Avatar,
      Badge,
    },
    methods: {
    },
  };
</script>