# Timeline 时间轴

## 基本用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Timeline pending="pending...">
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

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Timeline from '@/components/timeline';
  import TimelineItem from '@/components/timeline-item';

  export default {
    components: {
      Row,
      Col,
      Timeline,
      TimelineItem,
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>