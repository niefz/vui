# BackTop 回到顶部

返回页面顶部的操作按钮。

## 何时使用

- 当页面内容区域比较长时；
- 当用户需要频繁返回顶部查看相关内容时。

## 基本用法

:::demo 默认位置距离页面右部和底部 30px，滚动至距顶端 400px 时显示。

```html
<Row>
  <Col :span="24">
    向下滚动页面，灰色的按钮为默认效果。
    <BackTop></BackTop>
  </Col>
</Row>
```
:::

## 自定义

:::demo 自定义位置在页面底部 100px，滚动至距顶端 200px 时显示。

```html
<Row>
  <Col :span="24">
    向下滚动页面，蓝色的按钮为自定义效果。
    <BackTop :visibility-height="200" :bottom="100">
      <Button theme="primary">返回顶部</Button>
    </BackTop>
  </Col>
</Row>
```
:::

## API

BackTop props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| visibility-height | 页面滚动高度达到该值时才显示 | number | - | 400 |
| bottom | 距离底部的距离 | number | - | 30 |
| right | 距离右部的距离 | number | - | 30 |
| duration | 滚动动画持续时间(毫秒) | number | - | 1000 |

BackTop events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| on-click | 点击按钮时触发 | - |

BackTop slot

| 名称 | 说明 |
|---- |---- |
| 无 | 自定义内容 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import BackTop from '@/components/back-top';

  export default {
    components: {
      Row,
      Col,
      Button,
      BackTop,
    },
    methods: {
    },
  };
</script>

<style lang="scss" scoped>
  .article {
    height: 2000px; 
  }
</style>