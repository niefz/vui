# Timeline 时间轴

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-timeline>
      <v-timeline-item>
        first floor
      </v-timeline-item>
      <v-timeline-item>
        second floor
      </v-timeline-item>
      <v-timeline-item>
        third floor
      </v-timeline-item>
    </v-timeline>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Timeline from '@/components/timeline';
  import TimelineItem from '@/components/timeline-item';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VTimeline: Timeline,
      VTimelineItem: TimelineItem,
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>