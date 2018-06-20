# slider 滑块

用于滑动选值。

## 基本用法

:::demo 在 Slider 元素中定义 v-model 绑定数字变量

```html
<Row>
  <Slider v-model="value1"></Slider>
</Row>
```
:::

## 禁用状态

:::demo 加上 `disabled` 属性

```html
<Row>
  <Slider v-model="value2" disabled></Slider>
</Row>
```
:::

## 自定义颜色

:::demo 配置 `bar-color` `bar-background-color` `button-color` `button-border-color` 属性定义颜色

```html
<Row>
  <Slider v-model="value2" bar-color="#333" bar-background-color="#ccc"></Slider>
</Row>
<Row>
  <Slider v-model="value2" button-color="#FAAD14" button-border-color="#F5222D"></Slider>
</Row>
```
:::

## API

Slider props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| value | 滑条百分比值 | number | - | - |
| disabled | 是否禁用 | boolean | - | false |
| bar-color | 滚动条颜色 | string | - | - |
| bar-background-color | 滚动条背景颜色 | string | - | - |
| button-color | 滚动条按钮颜色 | string | - | - |
| button-border-color | 滚动条按钮边框颜色 | string | - | - |

Slider events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 状态发生变化时的回调函数 | 新状态的值 |

<script>
  import Row from '@/components/row';
  import Slider from '@/components/slider';

  export default {
    components: {
      Row,
      Slider,
    },
    data() {
      return {
        value1: 30,
        value2: 10,
      };
    },
    methods: {
    },
  };
</script>