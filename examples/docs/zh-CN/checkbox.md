# Checkbox 多选框

用于多选。

## 基础用法

:::demo 在v-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true。

```html
<v-row>
  <v-checkbox>标签一</v-checkbox>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  //import CheckboxGroup from '@/components/checkbox-group';
  import Checkbox from '@/components/checkbox';

  export default {
    components: {
      VRow: Row,
      VCheckbox: Checkbox,
      //VCheckboxGroup: CheckboxGroup,
    },
    data() {
      return {
        checked: true,
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleChange(val) {
        this.model = val;
      },
      handleMultipleChange(val) {
        this.multiple = val;
      },
    },
  };
</script>