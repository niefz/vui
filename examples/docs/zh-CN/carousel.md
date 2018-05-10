# Carousel 走马灯

走马灯

## 基础用法

:::demo 

```html
<v-row>
  <v-col>
    <v-carousel></v-carousel>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Carousel from '@/components/carousel';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VCarousel: Carousel,
    },
    methods: {
    },
  };
</script>