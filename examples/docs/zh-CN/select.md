# Select 选择器

下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础用法。

:::demo 

```html
<v-row>
  <v-col :span="6">
    <v-select>
      <v-select-menu>
        <v-select-menu-option :label="item" :value="item" v-for="item in options"></v-select-menu-option>
      </v-select-menu>
    </v-select>
  </v-col>
</v-row>
```
:::

## 属性值
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Select from '@/components/select';
  import SelectMenu from '@/components/select-menu';
  import SelectMenuOption from '@/components/select-menu-option';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VSelect: Select,
      VSelectMenu: SelectMenu,
      VSelectMenuOption: SelectMenuOption,
    },
    data() {
      return {
        options: ['上海', '北京', '广州', '深圳'],
      };
    },
  };
</script>