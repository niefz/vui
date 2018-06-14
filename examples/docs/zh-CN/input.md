# Input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 何时使用

- 需要用户输入表单域内容时。
- 提供组合型输入框，带搜索的输入框，还可以进行大小选择。

## 基本用法

:::demo 基本使用。

```html
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" placeholder="请输入"/>
  </Col>
</Row>
```
:::

## 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 Input 组件。

```html
<Row :gutter="10">
  <Col :span="12">
    <Input placeholder="请输入" disabled/>
  </Col>
</Row>
```
:::

## 带Icon的输入框

:::demo 通过 `prefix-icon` 和 `suffix-icon` 属性可在 Input 组件首、尾部增加辅助图标。

```html
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" prefix-icon="v-icon-search-o"/>
  </Col>
  <Col :span="12">
    <Input v-model="keywords" suffix-icon="v-icon-calendar-o"/>
  </Col>
</Row>
```
:::

## 复合型输入框

:::demo 可前置或后置元素，一般为标签或按钮。

```html
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" prepend="Http://"/>
  </Col>
  <Col :span="12">
    <Input v-model="keywords" append=".com"/>
  </Col>
</Row>
<Row :gutter="10">
  <Col :span="12">
    <Input v-model="keywords" prepend="Http://" append=".com"></Input>
  </Col>
  <Col :span="12">
    <Input v-model="keywords" prepend="Http://" append=".com" disabled></Input>
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