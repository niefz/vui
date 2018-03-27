# Radio 单选框

用于单选。

## 基础用法

:::demo 在 v-radio 元素中定义 v-model 绑定变量，选中意味着变量的值为相应 Radio value 属性的值。

```html
<v-row>
  <v-radio v-model="checked" value="单选框 small">单选框 small</v-radio>
</v-row>
<v-row>
  <v-radio-group v-model="checkedCity">
    <v-radio v-for="city in cities" :label="city" :value="city" :key="city"></v-radio>
  </v-radio-group>
</v-row>
<v-row>
  <v-radio-group v-model="checkedCity" mode="vertical" disabled>
    <v-radio v-for="city in cities" :label="city" :value="city" :key="city"></v-radio>
  </v-radio-group>
</v-row>
<v-row>
  <v-radio v-model="checked" value="单选框 mini" size="mini" border disabled>单选框 mini</v-radio>
  <v-radio v-model="checked" value="单选框 small" size="small" border disabled>单选框 small</v-radio>
  <v-radio v-model="checked" value="单选框 medium" size="medium" border>单选框 medium</v-radio>
  <v-radio v-model="checked" value="单选框 large" size="large" border>单选框 large</v-radio>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import RadioGroup from '@/components/radio-group';
  import Radio from '@/components/radio';

  export default {
    components: {
      VRow: Row,
      VRadioGroup: RadioGroup,
      VRadio: Radio,
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