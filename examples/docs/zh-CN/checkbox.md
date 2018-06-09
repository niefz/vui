# Checkbox 复选框

多选框。

## 何时使用

- 在一组可选项中进行多项选择时；
- 单独使用可以表示两种状态之间的切换，和 Toggle 类似。区别在于切换 Toggle 可以直接触发状态改变，而 Checkbox 一般用于状态标记，需要和提交操作配合。

## 基本用法

:::demo 简单的 Checkbox。

```html
<Row>
  <Col>
    <Checkbox v-model="checked" label="复选框 A"></Checkbox>
  </Col>
</Row>
```
:::

## 带边框

:::demo 设置 `border` 属性可以渲染为带有边框的复选框。

```html
<Row>
  <Checkbox v-model="checkes" value="复选框 A" border>复选框 A</Checkbox>
  <Checkbox v-model="checkes" value="复选框 B" border>复选框 B</Checkbox>
  <Checkbox v-model="checkes" value="复选框 C" border>复选框 C</Checkbox>
  <Checkbox v-model="checkes" value="复选框 D" border>复选框 D</Checkbox>
</Row>
```
:::

## 不可用

:::demo 通过 `disabled` 属性来禁用复选框。。

```html
<Row>
  <Col :span="6">
    <Checkbox label="复选框 B" disabled></Checkbox>
  </Col>
  <Col :span="6">
    <Checkbox v-model="checked" label="复选框 C" disabled></Checkbox>
  </Col>
</Row>
```
:::

## Checkbox 组

:::demo 使用 CheckboxGroup 配合数组来生成组合。

```html
<Row>
  <Col>
    <CheckboxGroup v-model="checkedCities">
      <Checkbox v-for="city in cities" :label="city" :value="city" :key="city"></Checkbox>
    </CheckboxGroup>
  </Col>
</Row>
<Row>
  <Col>
    {{ checkedCities }}
  </Col>
</Row>
```
:::

## 全选

:::demo 在实现全选效果时，你可能会用到 `indeterminate` 属性。

```html
<Row>
  <Col>
    <Checkbox v-model="checkAll" value="全选" :indeterminate="checkedCities.length !== cities.length">全选</Checkbox>
  </Col>
</Row>
<Row>
  <Col>
    <CheckboxGroup v-model="checkedCities">
      <Checkbox v-for="city in cities" :label="city" :value="city" :key="city"></Checkbox>
    </CheckboxGroup>
  </Col>
</Row>
```
:::

## 可选项目数量的限制

:::demo 使用 `min` 和 `max` 属性能够限制可以被勾选的项目的数量。。

```html
<Row>
  <Col>
    <CheckboxGroup v-model="checkedCities" :min="1" :max="2">
      <Checkbox v-for="city in cities" :label="city" :value="city" :key="city"></Checkbox>
    </CheckboxGroup>
  </Col>
</Row>
```
:::

## 布局

:::demo 提供 `vertical` 和 `horizontal` 两种布局，默认 `horizontal`。

```html
<Row>
  <CheckboxGroup v-model="checkedCities" mode="vertical">
    <Checkbox v-for="city in cities" :label="city" :value="city" :key="city"></Checkbox>
  </CheckboxGroup>
</Row>
```
:::

## API

Checkbox props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| size | 尺寸大小 | string | `mini` `small` `medium` `large` | small |
| name | 对应的原生 name 属性 | string | - | - |
| label | 显示的标签 | number | - | - |
| value | 选中状态的值 | string \/ number \/ boolean | - | - |
| border | 是否显示边框 | boolean | - | false|
| indeterminate | 设置 indeterminate 状态，只负责样式控制 | boolean | - | false|
| disabled | 是否禁用 | boolean | - | false|

Checkbox events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 在选项状态发生改变时触发 | true \| false |

CheckboxGroup props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| size | 尺寸大小 | string | `mini` `small` `medium` `large` | small |
| min | 可被勾选的 checkbox 的最小数量 | number | - | - |
| max | 可被勾选的 checkbox 的最大数量 | number | - | - |
| mode | 布局 | string | `vertical` `horizontal` | - |
| disabled | 是否禁用 | boolean | - | false|

Checkbox events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 绑定值变化时触发的事件 | 更新后的值 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import CheckboxGroup from '@/components/checkbox-group';
  import Checkbox from '@/components/checkbox';

  export default {
    components: {
      Row,
      Col,
      Checkbox,
      CheckboxGroup,
    },
    data() {
      return {
        checked: true,
        checkes: ['复选框 small'],
        cities: ['上海', '北京', '广州', '深圳'],
        checkedCities: ['上海'],
      };
    },
    computed: {
      checkAll() {
        return this.checkedCities.length === this.cities.length;
      },
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
    },
  };
</script>