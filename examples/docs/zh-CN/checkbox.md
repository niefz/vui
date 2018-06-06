# Checkbox 复选框

用于多选。

## 基本用法

:::demo 在 `Checkbox` 元素中定义 `v-model` 绑定变量，单一的 `Checkbox` 中，默认绑定变量的值会是 Boolean ，选中为 true 。

```html
<Row>
  <Checkbox v-model="checked" label="复选框 A" @change="handleChange"></Checkbox>
</Row>
<Row>
  <Checkbox value="全选" indeterminate>全选</Checkbox>
</Row>
<Row>
  <CheckboxGroup v-model="checkedCities" :min="1" :max="3" @change="handleChange">
    <Checkbox v-for="city in cities" :label="city" :value="city" :key="city"></Checkbox>
  </CheckboxGroup>
</Row>
<Row>
  <CheckboxGroup v-model="checkedCities" mode="vertical" disabled>
    <Checkbox v-for="city in cities" :label="city" :value="city" :key="city"></Checkbox>
  </CheckboxGroup>
</Row>
<Row>
  <Checkbox size="mini" label="复选框 mini" border disabled></Checkbox>
  <Checkbox v-model="checkes" value="复选框 small" size="small" border @change="handleChange">复选框 small</Checkbox>
  <Checkbox v-model="checkes" value="复选框 medium" size="medium" border @change="handleChange">复选框 medium</Checkbox>
  <Checkbox v-model="checkes" value="复选框 large" size="large" border @change="handleChange">复选框 large</Checkbox>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import CheckboxGroup from '@/components/checkbox-group';
  import Checkbox from '@/components/checkbox';

  export default {
    components: {
      Row,
      Checkbox,
      CheckboxGroup,
    },
    data() {
      return {
        checked: true,
        checkes: ['复选框 small'],
        cities: ['上海', '北京', '广州', '深圳'],
        checkedCities: ['上海'],
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
    },
  };
</script>