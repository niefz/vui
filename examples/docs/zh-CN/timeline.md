# Timeline 时间轴

## 基本用法

:::demo 

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

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Timeline from '@/components/timeline';
  import TimelineItem from '@/components/timeline-item';
  import Button from '@/components/button';

  export default {
    components: {
      Row,
      Col,
      Timeline,
      TimelineItem,
      Button,
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