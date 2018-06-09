# Radio 单选框

单选框。

## 何时使用

- 用于在多个备选项中选中单个状态。
- 和 Select 的区别是，Radio 所有选项默认可见，方便用户在比较中选择，因此选项不宜过多。

## 基本用法

:::demo 简单的 Radio。

```html
<Row>
  <Col :span="4">
    <Radio v-model="checked" value="1">备选项 A</Radio>
  </Col>
  <Col :span="4">
    <Radio v-model="checked" value="2">备选项 B</Radio>
  </Col>
</Row>
```
:::

## 带边框

:::demo 设置 `border` 属性可以渲染为带有边框的单选框。

```html
<Row>
  <Col :span="4">
    <Radio v-model="singleChecked" value="单选框 A" border>单选框 A</Radio>
  </Col>
  <Col :span="4">
    <Radio v-model="singleChecked" value="单选框 B" border>单选框 B</Radio>
  </Col>
  <Col :span="4">
    <Radio v-model="singleChecked" value="单选框 C" border>单选框 C</Radio>
  </Col>
  <Col :span="4">
    <Radio v-model="singleChecked" value="单选框 D" border>单选框 D</Radio>
  </Col>
</Row>
```
:::

## 不可用

:::demo 通过 `disabled` 属性来禁用单选框。。

```html
<Row>
  <Col :span="6">
    <Radio v-model="checked" value="1" disabled>备选项</Radio>
  </Col>
  <Col :span="6">
    <Radio v-model="checked" value="2" disabled>备选项</Radio>
  </Col>
</Row>
```
:::

## RadioGroup 组合

:::demo 使用 RadioGroup 配合数组来生成组合。

```html
<Row>
  <Col>
    <RadioGroup v-model="checkedCity">
      <Radio :label="city" :value="city" :key="city" v-for="city in cities"></Radio>
    </RadioGroup>
  </Col>
</Row>
<Row>
  <Col>
    {{ checkedCity }}
  </Col>
</Row>
```
:::

## 布局

:::demo 提供 `vertical` 和 `horizontal` 两种布局，默认 `horizontal`。

```html
<Row>
  <Col>
    <RadioGroup v-model="checkedCity" mode="vertical">
      <Radio :label="city" :value="city" :key="city" v-for="city in cities"></Radio>
    </RadioGroup>
  </Col>
</Row>
```
:::

## API

Radio props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| size | 尺寸大小 | string | `mini` `small` `medium` `large` | small |
| name | 对应的原生 name 属性 | string | - | - |
| label | 显示的标签 | number | - | - |
| value | 选中状态的值 | string \/ number | - | - |
| border | 是否显示边框 | boolean | - | false|
| disabled | 是否禁用 | boolean | - | false|

Radio events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

RadioGroup props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| size | 尺寸大小 | string | `mini` `small` `medium` `large` | small |
| mode | 布局 | string | `vertical` `horizontal` | - |
| disabled | 是否禁用 | boolean | - | false|

RadioGroup events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 绑定值变化时触发的事件 | 选中的 Radio label 值 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Radio from '@/components/radio';
  import RadioGroup from '@/components/radio-group';

  export default {
    components: {
      Row,
      Col,
      RadioGroup,
      Radio,
    },
    data() {
      return {
        checked: '1',
        singleChecked: '单选框 B',
        cities: ['上海', '北京', '广州', '深圳'],
        checkedCity: '上海',
      };
    },
    methods: {
    },
  };
</script>