# Radio 单选框

用于单选。

## 基础用法

:::demo 在 Radio 元素中定义 v-model 绑定变量，选中意味着变量的值为相应 Radio value 属性的值。

```html
<Row>
  <Radio v-model="checked" value="单选框 small">单选框 small</Radio>
</Row>
<Row>
  <RadioGroup v-model="checkedCity">
    <Radio v-for="city in cities" :label="city" :value="city" :key="city"></Radio>
  </RadioGroup>
</Row>
<Row>
  <RadioGroup v-model="checkedCity" mode="vertical" disabled>
    <Radio v-for="city in cities" :label="city" :value="city" :key="city"></Radio>
  </RadioGroup>
</Row>
<Row>
  <Radio v-model="checked" value="单选框 mini" size="mini" border disabled>单选框 mini</Radio>
  <Radio v-model="checked" value="单选框 small" size="small" border disabled>单选框 small</Radio>
  <Radio v-model="checked" value="单选框 medium" size="medium" border>单选框 medium</Radio>
  <Radio v-model="checked" value="单选框 large" size="large" border>单选框 large</Radio>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Radio from '@/components/radio';
  import RadioGroup from '@/components/radio-group';

  export default {
    components: {
      Row,
      RadioGroup,
      Radio,
    },
    data() {
      return {
        checked: '单选框 small',
        cities: ['上海', '北京', '广州', '深圳'],
        checkedCity: '上海',
      };
    },
    methods: {
    },
  };
</script>