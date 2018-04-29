# slider 滑块

用于滑动选值。

## 基础用法

:::demo 在 v-slider 元素中定义 v-model 绑定变量

```html
<v-row>
  <v-slider v-model="value1"></v-slider>
</v-row>
<v-row>
  <v-slider v-model="value2" disabled></v-slider>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Slider from '@/components/slider';

  export default {
    components: {
      VRow: Row,
      VSlider: Slider,
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