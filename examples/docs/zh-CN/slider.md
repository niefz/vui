# slider 滑块

用于滑动选值。

## 基础用法

:::demo 在 Slider 元素中定义 v-model 绑定变量

```html
<Row>
  <Slider v-model="value1"></Slider>
</Row>
<Row>
  <Slider v-model="value2" disabled></Slider>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Slider from '@/components/slider';

  export default {
    components: {
      Row,
      Slider,
    },
    data() {
      return {
        value1: 30,
        value2: 10,
      };
    },
    methods: {
    },
  };
</script>