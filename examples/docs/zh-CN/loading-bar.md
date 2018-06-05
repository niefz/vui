# LoadingBar 加载进度条

全局创建一个显示页面加载、异步请求、文件上传等的加载进度条。

## 何时使用

- 页面全局处于等待异步数据或正在渲染过程。

## 基本用法

:::demo 点击 Start 开始进度，点击 Finish 结束。

```html
<Row>
  <Col :span="24">
    <Button @click="start">Start</Button>
    <Button @click="finish">Finish</Button>
    <Button @click="error">Error</Button>
  </Col>
</Row>
```
:::

## API

LoadingBar props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| visibility-height | 页面滚动高度达到该值时才显示 | Number | - | 400 |
| bottom | 距离底部的距离 | Number | - | 30 |
| right | 距离右部的距离 | Number | - | 30 |
| duration | 滚动动画持续时间(毫秒) | Number | - | 1000 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import LoadingBar from '@/components/loading-bar';

  export default {
    components: {
      Row,
      Col,
      Button,
      LoadingBar,
    },
    methods: {
      start() {
        LoadingBar.start();
      },
      finish () {
        LoadingBar.finish();
      },
      error () {
        LoadingBar.error();
      },
    },
  };
</script>