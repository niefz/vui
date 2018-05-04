# Popover 气泡框

常用于展示气泡框。

## 基础用法

:::demo 使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```html
<v-row>
  <v-popover
    placement="top-end"
    title="标题"
    width="200"
    trigger="click"
    content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
    <v-button slot="reference">click 激活</v-button>
  </v-popover>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Popover from '@/components/popover';
  import Button from '@/components/button';

  export default {
    components: {
      VRow: Row,
      VPopover: Popover,
      VButton: Button,
    },
  };
</script>
<style lang="scss" scoped>
</style>