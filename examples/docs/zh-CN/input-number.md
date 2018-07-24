# Input 数字输入框

通过鼠标或键盘，输入范围内的数值。

## 何时使用

- 当需要获取标准数值时。

## 基本用法

:::demo 数字输入框。

```html
<Row>
  <Col :span="6">
    <InputNumber v-model="number" :min="1" :max="10"></InputNumber>
  </Col>
</Row>
```
:::

## 格式化展示

:::demo 通过 `formatter` 格式化数字，以展示具有具体含义的数据。

```html
<Row :gutter="30">
  <Col :span="6">
    <InputNumber
      v-model="number"
      :formatter="value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')"
      :parser="value => value.replace(/\$\s?|(,*)/g, '')">
    </InputNumber>
  </Col>
  <Col :span="6">
    <InputNumber
      v-model="number"
      :formatter="value => `${value} %`"
      :parser="value => value.replace(' %', ' ')">
    </InputNumber>
  </Col>
</Row>
```
:::

## 小数

:::demo 和原生的数字输入框一样，value 的精度由 `step` 的小数位数决定。

```html
<Row>
  <Col :span="6">
    <InputNumber
      v-model="float"
      :min="0"
      :max="10"
      :step="0.1"
      :precision="2">
    </InputNumber>
  </Col>
</Row>
```
:::

## 不可用

:::demo 禁用状态。

```html
<Row>
  <Col :span="6">
    <InputNumber v-model="number" disabled=""></InputNumber>
  </Col>
</Row>
```
:::

## API

InputNumber props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| size | 尺寸 | string | `large` `medium` `small` `mini` | small |
| placeholder | 输入框占位文本 | sting | - | - |
| max | 最大值 | number | - | - |
| min | 最小值 | number | - | - |
| precision | 数值精度 | number | - | - |
| step | 每次改变步数，可以为小数 | number | - | 1 |
| formatter | 指定输入框展示值的格式 | (value: number \| string) => string | - | - |
| disabled | 是否禁用 | boolean | - | false |

InputNumber events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 变化回调 | (value: number \| string) |
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import InputNumber from '@/components/input-number';

  export default {
    components: {
      Row,
      Col,
      InputNumber,
    },
    data() {
      return {
        number: 1,
        float: 1,
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