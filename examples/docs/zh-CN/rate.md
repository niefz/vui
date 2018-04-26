# Rate 评分

用于需要打分的场景。

## 基础用法

:::demo 在 v-rate 元素中定义 v-model 绑定变量

```html
<v-row>
  <v-rate v-model="value1"></v-rate>
</v-row>
<v-row>
  <v-rate v-model="value2" disabled></v-rate>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Rate from '@/components/rate';

  export default {
    components: {
      VRow: Row,
      VRate: Rate,
    },
    data() {
      return {
        value1: 1,
        value2: 2,
      };
    },
    methods: {
    },
  };
</script>