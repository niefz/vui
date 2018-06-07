# Exception 异常页

异常页用于对页面特定的异常状态进行反馈。

## 何时使用

- 包含对错误状态的阐述，并向用户提供建议或操作，避免用户感到迷失和困惑。

## 403

:::demo 403 页面，配合自定义操作。

```html
<Row>
  <Col>
    <Exception exception="403">
      <Button theme="primary">返回首页</Button>
    </Exception>
  </Col>
</Row>
```
:::

## 404

:::demo 404 页面，配合自定义操作。

```html
<Row>
  <Col>
    <Exception>
      <Button theme="primary">返回首页</Button>
    </Exception>
  </Col>
</Row>
```
:::

## 500

:::demo 500 页面，配合自定义操作。

```html
<Row>
  <Col>
    <Exception exception="500">
      <Button theme="primary">返回首页</Button>
    </Exception>
  </Col>
</Row>
```
:::

## API

Exception props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| exception | 页面类型 | string | `403` `404` `500` | 404 |
| src | 图片地址 | string | - | - |
| description | 补充描述 | string | - | - |

Exception slot

| 名称 | 说明 |
|---- |---- |
| 无 | 自定义内容 |

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