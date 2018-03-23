# Divider分割线

区隔内容的分割线。

## 代码示例

:::demo 默认为水平分割线，可在中间加入文字。

```html
<v-row>分割线<v-divider mode="vertical"></v-divider>分割线</v-row>
<v-divider mode="vertical">分割线</v-divider>
<v-divider mode="vertical" dashed>分割线</v-divider>
<v-divider dashed></v-divider>
<v-divider align="left" dashed>分割线</v-divider>
<v-divider align="center">分割线</v-divider>
<v-divider align="right">分割线</v-divider>
```
:::

<script>
  import Row from '@/components/row';
  import Divider from '@/components/Divider';

  export default {
    components: {
      VRow: Row,
      VDivider: Divider,
    },
  };
</script>