# Checkbox 多选框

用于多选。

## 基础用法

:::demo 在v-checkbox元素中定义v-model绑定变量。

```html
<v-row>
  <v-checkbox label="复选框 A" v-model="checked"></v-checkbox>
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
      };
    },
    methods: {
    },
  };
</script>