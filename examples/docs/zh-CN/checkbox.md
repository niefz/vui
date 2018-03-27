# Checkbox 多选框

用于多选。

## 基础用法

:::demo 在v-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。

```html
<v-row>
  <v-checkbox v-model="checked">复选框 A</v-checkbox>
</v-row>
<v-row>
  <v-checkbox-group v-model="checkedCities">
    <v-checkbox v-for="city in cities" :label="city" :value="city" :key="city">{{city}}</v-checkbox>
  </v-checkbox-group>
</v-row>
<v-row>
  <v-checkbox-group mode="vertical" v-model="checkedCities">
    <v-checkbox v-for="city in cities" :label="city" :value="city" :key="city">{{city}}</v-checkbox>
  </v-checkbox-group>
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
        cities: ['上海', '北京', '广州', '深圳'],
        checkedCities: ['上海'],
      };
    },
    methods: {
    },
  };
</script>