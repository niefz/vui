# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 线形进度条 — 百分比外显

:::demo Progress 组件设置`percentage`属性(**必填**)即可，表示进度条对应的百分比，必须在 0-100。

```html
<v-progress :percentage="0"></v-progress>
<v-progress :percentage="70"></v-progress>
<v-progress :percentage="50" status="active"></v-progress>
<v-progress :percentage="100" status="success"></v-progress>
<v-progress :percentage="50" status="exception"></v-progress>
<v-progress :stroke-width="10" :percentage="70" icon="v-icon-delete" text-inside></v-progress>
<v-progress shape="circle" :percentage="0" status="success" icon="v-icon-delete"></v-progress>
<v-progress shape="circle" :percentage="50"></v-progress>
<v-progress shape="circle" :percentage="75">50 Day</v-progress>
<v-progress shape="dashboard" :percentage="75"></v-progress>
```
:::

<script>
  import Progress from '@/components/Progress';

  export default {
    components: {
      VProgress: Progress,
    },
  };
</script>