# Select 选择器

下拉菜单展示并选择内容。

## 基本用法

适用广泛的基本用法。

:::demo 

```html
<Row>
  <Col :span="6">
    <Select v-model="select">
      <SelectMenu>
        <SelectMenuOption :label="item" :value="item" :key="item" v-for="item in options"></SelectMenuOption>
      </SelectMenu>
    </Select>
  </Col>
</Row>
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
      Row,
      Col,
      Select,
      SelectMenu,
      SelectMenuOption,
    },
    data() {
      return {
        select: '上海',
        options: ['上海', '北京', '广州', '深圳'],
      };
    },
  };
</script>