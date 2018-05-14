# Divider 分割线

区隔内容的分割线。

## 代码示例

:::demo 默认为水平分割线，可在中间加入文字。

```html
<Row>分割线<Divider mode="vertical"></Divider>分割线</Row>
<Divider mode="vertical">分割线</Divider>
<Divider mode="vertical" dashed>分割线</Divider>
<Divider dashed></Divider>
<Divider align="left" dashed>分割线</Divider>
<Divider align="center">分割线</Divider>
<Divider align="right">分割线</Divider>
```
:::

<script>
  import Row from '@/components/row';
  import Divider from '@/components/Divider';

  export default {
    components: {
      Row,
      Divider,
    },
  };
</script>