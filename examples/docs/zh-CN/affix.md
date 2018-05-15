# Affix 固钉

将页面元素钉在可视范围。

## 何时使用

当内容区域比较长，需要滚动页面时，这部分内容对应的操作或者导航需要在滚动范围内始终展现。常用于侧边菜单和按钮组合。

页面可视范围过小时，慎用此功能以免遮挡页面内容。

## 基础用法

:::demo 固定在最顶端。

```html
<Row>
  <Col :span="24">
    <Affix>
      <Button theme="primary">Affix top</Button>
    </Affix>
  </Col>
</Row>
```
:::

:::demo 滚动到一定距离时再固定。

```html
<Row>
  <Col :span="24">
    <Affix :top="64">
      <Button theme="primary">Affix offsetTop 64px</Button>
    </Affix>
  </Col>
</Row>
```
:::

:::demo 固定屏幕下方。

```html
<Row>
  <Col :span="24">
    <Affix :bottom="20">
      <Button theme="primary">Affix Bottom 20px</Button>
    </Affix>
  </Col>
</Row>
```
:::

:::demo 固定状态改变时的回调。

```html
<Row>
  <Col :span="24">
    <Affix :top="100" @change="change">
      <Button theme="primary">Affix offsetTop 100px</Button>
    </Affix>
  </Col>
</Row>
```
:::

## API

Affix props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| affix | 初始化固定模式 | boolean | - | false |
| top | 距离窗口顶部达到指定偏移量后触发 | number | - | - |
| right | 固钉距离窗口右侧距离 | number | - | - |
| bottom | 距离窗口底部达到指定偏移量后触发 | number | - | - |
| left | 固钉距离窗口左侧距离 | number | - | - |

Affix events

| 参数 | 说明 | 返回值 |
|---- |---- |---- |
| change | 在固定状态发生改变时触发 | true \| false |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Affix from '@/components/affix';
  import Message from '@/components/message';

  export default {
    components: {
      Row,
      Col,
      Button,
      Affix,
    },
    methods: {
      change(val) {
        Message({
          theme: 'info',
          message: `当前状态：${val}`,
        });
      },
    },
  };
</script>
<style lang="scss" scoped>
  .article {
    height: 2000px; 
  }
</style>