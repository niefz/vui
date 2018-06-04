# DateTimePicker 日期时间选择器

用于日期时间选择。

## 基本用法

:::demo 在 v-rate 元素中定义 v-model 绑定变量

```html
<Row>
  <DateTimePicker v-model="value1"></DateTimePicker>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import DateTimePicker from '@/components/date-time-picker';

  export default {
    components: {
      Row,
      DateTimePicker,
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