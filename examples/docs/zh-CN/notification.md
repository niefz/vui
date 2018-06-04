# Notification 通知提醒

全局展示通知提醒信息。

## 何时使用

在系统四个角显示通知提醒信息。经常用于以下情况：

- 较为复杂的通知内容。
- 带有交互的通知，给出用户下一步的行动点。
- 系统主动推送。

## 基础用法

:::demo 最简单的用法，`3s` 后自动关闭。

```html
<Row>
  <Col :span="24">
    <Button @click="info">消息</Button>
  </Col>
</Row>
```
:::

## 状态

:::demo 常用来显示「成功、警告、错误」类的系统消息。

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

## 显示位置

:::demo 可以设置通知从右上角、右下角、左下角、左上角弹出。

```html
<Row>
  <Col :span="24">
    <Button @click="placement('top-right')">右上角</Button>
    <Button @click="placement('bottom-right')">右下角</Button>
    <Button @click="placement('bottom-left')">左下角</Button>
    <Button @click="placement('top-left')">左上角</Button>
  </Col>
</Row>
```
:::

## API

Notification Options

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| theme | 通知类型 | string | `info`，`success` `warning` `error` | info |
| show-icon | 是否显示图标 | boolean | - | false |
| icon | 自定义图标 | string | - | - |
| title | 标题 | string | - | - |
| message | 消息内容 | string \/ HTML 片段 | - | - |
| duration | 关闭延时(毫秒)，设为 0 则不会自动关闭 | number | - | 3000 |
| closable | 是否显示关闭按钮 | boolean | - | true |
| close-text | 关闭文本，替换关闭按钮 | string | - | - |
| on-close | 关闭时的回调函数, 参数为被关闭的 Notification 实例 | function | - | - |

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
      info() {
        Notify({
          title: '默认通知提醒',
        });
      },
      success() {
        Notify({
          theme: 'success',
          title: '成功通知提醒',
          content: '这是一条成功的提示消息',
        });
      },
      warning() {
        Notify({
          theme: 'warning',
          title: '警告通知提醒',
          content: '这是一条警告的提示消息',
        });
      },
      error() {
        Notify({
          theme: 'error',
          title: '失败通知提醒',
          content: '这是一条错误的提示消息',
        });
      },
      placement(placement) {
        Notify({
          placement: placement,
          title: '默认通知提醒',
          content: '这是一条默认的提示消息',
        });
      },
    },
  };
</script>