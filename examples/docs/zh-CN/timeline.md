# Timeline 时间轴

## 基本用法

:::demo 基本的时间轴。

```html
<Row>
  <Col :span="24">
    <Timeline>
      <TimelineItem>
        first floor
      </TimelineItem>
      <TimelineItem>
        second floor
      </TimelineItem>
      <TimelineItem>
        <p>third floor</p>
        <p>let me show you something.</p>
      </TimelineItem>
      <TimelineItem>
        <p>test floor</p>
      </TimelineItem>
    </Timeline>
  </Col>
</Row>
```
:::

## 节点加载

:::demo 根据 `reverse` 切换正序和倒序

```html
<Row>
  <Col :span="24">
    <Timeline pending="pending..." :reverse="reverse">
      <TimelineItem>
        first floor
      </TimelineItem>
      <TimelineItem>
        second floor
      </TimelineItem>
      <TimelineItem>
        <p>third floor</p>
        <p>let me show you something.</p>
      </TimelineItem>
      <TimelineItem>
        <p>test floor</p>
      </TimelineItem>
    </Timeline>
  </Col>
  <Col :span="24">
    <Button theme="primary" @click="toggleReverse">Toggle Reverse</Button>
  </Col>
</Row>
```
:::

## 自定义图标

:::demo 根据 `color` 可自定义颜色或者传入slot=`itemIcon`图标

```html
<Row>
  <Col :span="24">
    <Timeline pending="pending...">
      <TimelineItem>
        first floor
      </TimelineItem>
      <TimelineItem color="#f00">
        second floor
      </TimelineItem>
      <TimelineItem>
        <Icon icon="v-icon-delete-o" slot="itemIcon" class="v-timeline-icon"></Icon>
        <p>third floor</p>
        <p>let me show you something.</p>
      </TimelineItem>
      <TimelineItem>
        <p>test floor</p>
      </TimelineItem>
    </Timeline>
  </Col>
</Row>
```
:::

## API

Timeline props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| pending | 加载中的文字显示 | string | - | - |
| reverse | 是否反转头尾加载项 | boolean | - | false |

TimelineItem props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| color | 图标边框颜色 | string | - | - |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Timeline from '@/components/timeline';
  import TimelineItem from '@/components/timeline-item';
  import Button from '@/components/button';
  import Icon from '@/components/icon';

  export default {
    components: {
      Row,
      Col,
      Timeline,
      TimelineItem,
      Button,
      Icon,
    },
    data() {
      return {
        reverse: false,
      };
    },
    methods: {
      toggleReverse() {
        this.reverse = !this.reverse;
      },
    },
  };
</script>