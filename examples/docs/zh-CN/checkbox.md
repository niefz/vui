# Checkbox 复选框

用于多选。

## 基础用法

:::demo 在v-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。

```html
<v-row>
  <v-checkbox v-model="checked" label="复选框 A" @change="handleChange"></v-checkbox>
</v-row>
<v-row>
  <v-checkbox value="全选" indeterminate>全选</v-checkbox>
</v-row>
<v-row>
  <v-checkbox-group v-model="checkedCities" :min="1" :max="3" @change="handleChange">
    <v-checkbox v-for="city in cities" :label="city" :value="city" :key="city"></v-checkbox>
  </v-checkbox-group>
</v-row>
<v-row>
  <v-checkbox-group v-model="checkedCities" mode="vertical" disabled>
    <v-checkbox v-for="city in cities" :label="city" :value="city" :key="city"></v-checkbox>
  </v-checkbox-group>
</v-row>
<v-row>
  <v-checkbox size="mini" label="复选框 mini" border disabled></v-checkbox>
  <v-checkbox v-model="checkes" value="复选框 small" size="small" border @change="handleChange">复选框 small</v-checkbox>
  <v-checkbox v-model="checkes" value="复选框 medium" size="medium" border @change="handleChange">复选框 medium</v-checkbox>
  <v-checkbox v-model="checkes" value="复选框 large" size="large" border @change="handleChange">复选框 large</v-checkbox>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import CheckboxGroup from '@/components/checkbox-group';
  import Checkbox from '@/components/checkbox';

  export default {
    components: {
      VRow: Row,
      VCheckboxGroup: CheckboxGroup,
      VCheckbox: Checkbox,
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