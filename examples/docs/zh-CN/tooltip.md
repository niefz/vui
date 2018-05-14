# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

:::demo 使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```html
<Row>
  <Tooltip theme="dark" content="Top Left 提示文字" placement="top-start">
    <Button>上左</Button>
  </Tooltip>
  <Tooltip theme="dark" content="Top Left 提示文字" placement="top">
    <Button>上边</Button>
  </Tooltip>
  <Tooltip theme="dark" content="Top Left 提示文字" placement="top-end">
    <Button>上右</Button>
  </Tooltip>
</Row>
<Row>
  <Tooltip theme="light" content="Top Left 提示文字" placement="bottom-start">
    <Button>下左</Button>
  </Tooltip>
  <Tooltip theme="light" content="Top Left 提示文字" placement="bottom">
    <Button>下边</Button>
  </Tooltip>
  <Tooltip theme="light" content="Top Left 提示文字" placement="bottom-end">
    <Button>下右</Button>
  </Tooltip>
</Row>
```
:::


<script>
  import Row from '@/components/row';
  import Tooltip from '@/components/tooltip';
  import Button from '@/components/button';

  export default {
    components: {
      Row,
      Button,
      Tooltip,
    },
  };
</script>
<style lang="scss" scoped>
</style>