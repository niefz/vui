# Input 数字输入框

基础用法。

:::demo 

```html
<v-row :gutter="10">
  <v-col :span="12">
    <v-input-number v-model="keywords" :min="1" :max="10"></v-input>
  </v-col>
  <v-col :span="12">
    <v-input-number :min="1" :max="10"></v-input>
  </v-col>
</v-row>
```
:::
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import InputNumber from '@/components/input-number';
  import Button from '@/components/button';
  import Select from '@/components/select';
  import SelectMenu from '@/components/select-menu';
  import SelectMenuOption from '@/components/select-menu-option';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VInputNumber: InputNumber,
      VButton: Button,
      VSelect: Select,
      VSelectMenu: SelectMenu,
      VSelectMenuOption: SelectMenuOption,
    },
    data() {
      return {
        keywords: 1,
        select: '上海',
        options: ['上海', '北京', '广州', '深圳'],
      };
    },
    methods: {
      handleSuffix() {
        console.log(this.keywords);
      },
    },
  };
</script>
<style lang="scss" scoped>

</style>