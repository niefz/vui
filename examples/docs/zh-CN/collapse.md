# Collapse 折叠面板

可以折叠/展开的内容区域。

## 何时使用

- 对复杂区域进行分组和隐藏，保持页面的整洁。
- 手风琴，一种特殊的折叠面板，只允许单个内容区域展开。

## 基本用法

:::demo 可以同时展开多个面板，也可以通过 `default-active` 设置默认展开第几个。

```html
<Row>
  <Collapse v-model="activeNames" default-active="3" @change="handleChange">
    <CollapsePanel title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </CollapsePanel>
    <CollapsePanel title="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </CollapsePanel>
    <CollapsePanel title="效率 Efficiency" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </CollapsePanel>
    <CollapsePanel title="可控 Controllability" name="4">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </CollapsePanel>
  </Collapse>
</Row>
```
:::

## 手风琴

:::demo 通过 `accordion` 属性开启手风琴模式，每次只能打开一个面板。

```html
<Row>
  <Collapse @change="handleChange" accordion>
    <CollapsePanel title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </CollapsePanel>
    <CollapsePanel title="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </CollapsePanel>
    <CollapsePanel title="效率 Efficiency" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </CollapsePanel>
    <CollapsePanel title="可控 Controllability" name="4">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </CollapsePanel>
  </Collapse>
</Row>
```
:::

## 面板嵌套

:::demo 折叠面板可以嵌套使用。

```html
<Row>
  <Collapse v-model="activeNames" @change="handleChange">
    <CollapsePanel title="一致性 Consistency" name="1">
      <CollapsePanel title="反馈 Feedback" name="2">
        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
      </CollapsePanel>
      <CollapsePanel title="效率 Efficiency" name="3">
        <div>简化流程：设计简洁直观的操作流程；</div>
        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
      </CollapsePanel>
    </CollapsePanel>
    <CollapsePanel title="可控 Controllability" name="4" disabled>
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </CollapsePanel>
  </Collapse>
</Row>
```
:::

## 隐藏箭头

:::demo 可以通过 `show-arrow="false"` 隐藏 `CollapsePanel` 组件的箭头图标。

```html
<Row>
  <Collapse v-model="activeNames" @change="handleChange" :show-arrow="false">
    <CollapsePanel title="一致性 Consistency" name="1">
      <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
      <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
    </CollapsePanel>
    <CollapsePanel title="反馈 Feedback" name="2">
      <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
      <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
    </CollapsePanel>
    <CollapsePanel title="效率 Efficiency" name="3">
      <div>简化流程：设计简洁直观的操作流程；</div>
      <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
      <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
    </CollapsePanel>
    <CollapsePanel title="可控 Controllability" name="4">
      <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
      <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
    </CollapsePanel>
  </Collapse>
</Row>
```
:::

## API

Collapse props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| value | 当前激活的面板(如果是手风琴模式，绑定值类型需要为string，否则为array) | array \/ string | - | - |
| default-active | 初始化选中面板的 name | string | - | - |
| accordion | 是否手风琴模式 | boolean | - | false |

Collapse events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 切换面板时触发，返回当前已展开的面板的 name | array \/ string |

CollapsePanel props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| title | 面板标题 | string | - | - |
| name | 当前面板的 name，与 Collapse 的 value 对应 | string | - | - |
| disabled | 是否禁用当前面板项 | Boolean | - | false |

CollapsePanel slot

| 名称 | 说明 |
|---- |---- |
| title | 面板项的标题 |
| 无 | 面板项的内容 |

<script>
  import Row from '@/components/row';
  import Collapse from '@/components/collapse';
  import CollapsePanel from '@/components/collapse-panel';

  export default {
    components: {
      Row,
      Collapse,
      CollapsePanel,
    },
    data() {
      return {
        activeNames: ['1'],
      };
    },
    methods: {
      handleChange(val) {
        console.log(val);
      },
    },
  };
</script>
<style lang="scss" scoped>
</style>