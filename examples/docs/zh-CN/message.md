# Message 全局提示

全局展示操作后的反馈提示。

## 何时使用
- 可提供成功、警告和错误等反馈信息。
- 顶部居中显示并自动消失，是一种不打断用户操作的轻量级提示方式。

## 普通提示

:::demo 默认信息提醒反馈。

```html
<Row>
  <Col :span="24">
    <Button @click="info">默认提示</Button>
  </Col>
</Row>
```
:::

## 状态

:::demo 「成功、警告、错误」类的操作反馈。

```html
<Row>
  <Col :span="24">
    <Button @click="success">成功</Button>
    <Button @click="warning">警告</Button>
    <Button @click="error">失败</Button>
  </Col>
</Row>
```
:::

## 修改延时

:::demo 自定义时长 `10s`，默认时长为 `3s`。

```html
<Row>
  <Col :span="24">
    <Button @click="delay">延时关闭</Button>
  </Col>
</Row>
```
:::

## API

Message Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| theme | 警告类型 | string | `info`，`success` `warning` `error` | info |
| align | 对齐方式 | string | - | left |
| show-icon | 是否显示图标 | boolean | - | false |
| icon | 自定义图标 | string | - | - |
| message | 消息内容 | string \/ HTML 片段 | - | - |
| duration | 关闭延时(毫秒)，设为 0 则不会自动关闭 | number | - | 3000 |
| on-close | 关闭时的回调函数, 参数为被关闭的 Message 实例 | function | - | - |

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
      info() {
        Message({
          message: '默认消息提示',
        });
      },
      success() {
        Message({
          theme: 'success',
          message: '成功消息提示',
        });
      },
      warning() {
        Message({
          theme: 'warning',
          message: '警告消息提示',
        });
      },
      error() {
        Message({
          theme: 'error',
          message: '失败消息提示',
        });
      },
      delay() {
        Message({
          message: '延时消息提示',
          duration: 10000,
        });
      },
    },
  };
</script>