# Toggle 开关

开关选择器。

## 何时使用

- 需要表示开关状态/两种状态之间的切换时；

- 和 `Checkbox` 的区别是，`Toggle` 切换可以直接触发状态改变，而 `Checkbox` 一般用于状态标记，需要和提交操作配合。

## 基本用法

:::demo 最简单的用法，状态切换时会触发事件。

```html
<Row>
  <Col>
    <Toggle v-model="checked" @change="handleChange"></Toggle>
  </Col>
</Row>
```
:::

## 文字和图标

:::demo 带有自定义文字和图标。

```html
<Row>
  <Col :span="6">
    <Toggle v-model="checked" :width="52">
      <template slot="on">ON</template>
      <template slot="off">OFF</template>
    </Toggle>
  </Col>
  <Col :span="6">
    <Toggle v-model="checked">
      <template slot="on">
        <Icon icon="v-icon-check-o"></Icon>
      </template>
      <template slot="off">
        <Icon icon="v-icon-close-o"></Icon>
      </template>
    </Toggle>
  </Col>
</Row>
```
:::

## 不可用

:::demo 禁用状态。

```html
<Row>
  <Col>
    <Toggle v-model="checkDisabled" disabled></Toggle>
  </Col>
</Row>
```
:::

## API

Toggle props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| name | 对应的原生 name 属性 | string | - | - |
| width | 宽度（像素） | number | - | 40 |
| disabled | 是否禁用 | boolean | - | false |
| before-toggle | 切换前的回调，会暂停 Toggle 的切换 | (done) = {}，done 用于切换 Toggle	 | - | - |

Toggle events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 状态发生变化时的回调函数 | 新状态的值 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Icon from '@/components/icon';
  import Message from '@/components/message';
  import Toggle from '@/components/toggle';

  export default {
    components: {
      Row,
      Col,
      Icon,
      Toggle,
    },
    data() {
      return {
        checked: false,
        checkDisabled: true,
      };
    },
    methods: {
      handleChange(val) {
        Message({
          theme: 'info',
          message: `开关状态：${val}`,
        });
      },
    },
  };
</script>