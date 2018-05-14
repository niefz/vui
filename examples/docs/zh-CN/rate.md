# Rate 评分

用于需要打分的场景。

## 基础用法

:::demo 在 Rate 元素中定义 v-model 绑定变量

```html
<Row>
  <Rate v-model="value1"></Rate>
</Row>
<Row>
  <Rate v-model="value2" disabled></Rate>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Rate from '@/components/rate';

  export default {
    components: {
      Row,
      Rate,
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