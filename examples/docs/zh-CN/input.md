# Input 输入框

基本用法。

:::demo 

```html
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" suffix-icon="v-icon-calendar-o" @suffix-click="handleSuffix" @keyup.enter="handleSuffix"></Input>
  </Col>
  <Col :span="12">
    <Input prefix-icon="v-icon-calendar-o" disabled></Input>
  </Col>
</Row>
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" prepend="Http://" suffix-icon="v-icon-calendar-o" @suffix-click="handleSuffix"></Input>
  </Col>
  <Col :span="12">
    <Input v-model="keywords" suffix-icon="v-icon-calendar-o" append=".com" disabled></Input>
  </Col>
</Row>
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" prepend="Http://" @suffix-click="handleSuffix">
      <template slot="append"><Button theme="primary" @click="handleSuffix">查询</Button></template>
    </Input>
  </Col>
  <Col :span="12">
    <Input v-model="keywords" prepend="Http://" suffix-icon="v-icon-calendar-o" @suffix-click="handleSuffix">
      <template slot="append"><Button>查询</Button></template>
    </Input>
  </Col>
</Row>
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" prepend="Http://" @suffix-click="handleSuffix">
      <template slot="append">
        <Select v-model="select">
          <SelectMenu>
            <SelectMenuOption :label="item" :value="item" :key="item" v-for="item in options"></SelectMenuOption>
          </SelectMenu>
        </Select>
      </template>
    </Input>
  </Col>
  <Col :span="12">
    <Input v-model="keywords" suffix-icon="v-icon-calendar-o" @suffix-click="handleSuffix">
      <template slot="prepend">
        <Select v-model="select">
          <SelectMenu>
            <SelectMenuOption :label="item" :value="item" :key="item" v-for="item in options"></SelectMenuOption>
          </SelectMenu>
        </Select>
      </template>
    </Input>
  </Col>
</Row>
<Row :gutter="10">
  <Col :span="12">
    <Textarea v-model="keywords"></Textarea>
  </Col>
  <Col :span="12">
    <Textarea v-model="keywords" disabled></Textarea>
  </Col>
</Row>
```
:::
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Input from '@/components/input';
  import Textarea from '@/components/textarea';
  import Button from '@/components/button';
  import Select from '@/components/select';
  import SelectMenu from '@/components/select-menu';
  import SelectMenuOption from '@/components/select-menu-option';

  export default {
    components: {
      Row,
      Col,
      Input,
      Textarea,
      Button,
      Select,
      SelectMenu,
      SelectMenuOption,
    },
    data() {
      return {
        keywords: '',
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