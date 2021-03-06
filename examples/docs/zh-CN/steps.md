# Steps 步骤条

引导用户按照流程完成任务的导航条。

## 何时使用

当任务复杂或者存在先后关系时，将其分解成一系列步骤，从而简化任务。

## 基本用法

:::demo 简单的步骤条。

```html
<Row>
  <Col :span="24">
    <Steps>
      <StepsItem title="已完成" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="进行中" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
    </Steps>
  </Col>
</Row>
```
:::

## 带图标的步骤条

:::demo 通过设置 `Steps` 的 `icon` 属性，可以启用自定义图标。

```html
<Row>
  <Col :span="24">
    <Steps>
      <StepsItem icon="v-icon-user-plus-o" title="注册"></StepsItem>
      <StepsItem icon="v-icon-upload-o" title="上传头像"></StepsItem>
      <StepsItem icon="v-icon-mail-o" title="验证邮箱"></StepsItem>
    </Steps>
  </Col>
</Row>
```
:::

## 步骤状态

:::demo 使用 `Steps` 的 `status` 属性来指定当前步骤的状态。

```html
<Row>
  <Col :span="24">
    <Steps :current="1" status="error">
      <StepsItem title="已完成" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="进行中" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
    </Steps>
  </Col>
</Row>
```
:::

## 步骤切换

:::demo 通常配合内容及按钮使用，表示一个流程的处理进度。。

```html
<Row>
  <Col :span="24">
    <Steps :current="current">
      <StepsItem title="已完成" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="进行中" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <template slot="content">
        <StepsPanel :name="1">这里是步骤一的详细内容</StepsPanel>
        <StepsPanel :name="2">这里是步骤二的详细内容</StepsPanel>
        <StepsPanel :name="3">这里是步骤三的详细内容</StepsPanel>
        <StepsPanel :name="4">这里是步骤四的详细内容</StepsPanel>
      </template>
    </Steps>
  </Col>
  <Col :span="24">
    <Button theme="primary" @click="handleClick">{{current >= 4 ? '完成' : '下一步'}}</Button>
    <Button v-if="current > 1" @click="current -= 1">上一步</Button>
  </Col>
</Row>
```
:::

## 垂直步骤条

:::demo 设置 `mode` 属性为 `vertical` 在垂直方向展示。

```html
<Row>
  <Col :span="24">
    <Steps mode="vertical" :current="2" status="error">
      <StepsItem title="已完成" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="进行中" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
    </Steps>
  </Col>
</Row>
```
:::

## API

Steps props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| mode | 步骤条的方向 | string | `horizontal` `vertical` | horizontal |
| current | 当前步骤，从 1 开始计数 | number | - | 1 |
| status | 当前步骤的状态 | string | `wait` `process` `finish` `error` | process |

Steps slot

| 名称 | 说明 |
|---- |---- |
| 无 | 步骤导航 |
| content | 步骤详细内容 |

StepsItem props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| icon | 步骤的图标，可选 | string | - | - |
| title | 标题 | string | - | - |
| description | 步骤的详细描述，可选 | string | - | - |

StepsPanel props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| name | 激活与 `current` 相等的步骤内容 | number | - | - |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Steps from '@/components/steps';
  import StepsItem from '@/components/steps-item';
  import StepsPanel from '@/components/steps-panel';

  export default {
    components: {
      Row,
      Col,
      Button,
      Steps,
      StepsItem,
      StepsPanel,
    },
    data() {
      return {
        current: 1,
      };
    },
    methods: {
      handleClick() {
        if (this.current < 4) {
          this.current += 1;
        }
      },
    },
  };
</script>