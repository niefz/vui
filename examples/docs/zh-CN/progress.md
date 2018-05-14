# Progress 进度条

用于展示操作进度，告知用户当前状态和预期。

## 线形进度条 — 百分比外显

:::demo Progress 组件设置`percentage`属性(**必填**)即可，表示进度条对应的百分比，必须在 0-100。

```html
<Progress :percentage="0"></Progress>
<Progress :percentage="70"></Progress>
<Progress :percentage="50" status="active"></Progress>
<Progress :percentage="100" status="success"></Progress>
<Progress :percentage="50" status="exception"></Progress>
<Progress :stroke-width="10" :percentage="70" icon="v-icon-delete" text-inside></Progress>
<Progress shape="circle" :percentage="0" status="success" icon="v-icon-delete"></Progress>
<Progress shape="circle" :percentage="50"></Progress>
<Progress shape="circle" :percentage="75">50 Day</Progress>
<Progress shape="dashboard" :percentage="75"></Progress>
```
:::

<script>
  import Progress from '@/components/Progress';

  export default {
    components: {
      Progress,
    },
  };
</script>