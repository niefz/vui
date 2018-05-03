# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

:::demo 使用content属性来决定hover时的提示信息。由placement属性决定展示效果：placement属性值为：方向-对齐位置；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。如placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

```html
<v-row>
  <v-tooltip theme="dark" content="Top Left 提示文字" placement="top-start">
    <v-button>上左</v-button>
  </v-tooltip>
  <v-tooltip theme="dark" content="Top Left 提示文字" placement="top">
    <v-button>上边</v-button>
  </v-tooltip>
  <v-tooltip theme="dark" content="Top Left 提示文字" placement="top-end">
    <v-button>上右</v-button>
  </v-tooltip>
</v-row>
<v-row>
  <v-tooltip theme="light" content="Top Left 提示文字" placement="bottom-start">
    <v-button>下左</v-button>
  </v-tooltip>
  <v-tooltip theme="light" content="Top Left 提示文字" placement="bottom">
    <v-button>下边</v-button>
  </v-tooltip>
  <v-tooltip theme="light" content="Top Left 提示文字" placement="bottom-end">
    <v-button>下右</v-button>
  </v-tooltip>
</v-row>
```
:::


<script>
  import Row from '@/components/row';
  import Tooltip from '@/components/tooltip';
  import Button from '@/components/button';

  export default {
    components: {
      VRow: Row,
      VTooltip: Tooltip,
      VButton: Button,
    },
  };
</script>
<style lang="scss" scoped>
</style>