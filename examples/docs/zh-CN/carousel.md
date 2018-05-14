# Carousel 走马灯

走马灯

## 基础用法

:::demo 

```html
<Row>
  <Col>
    <Carousel height="100px">
			<CarouselItem 
				v-for="item in myItems"
				:key="item"
			>
				<em>{{item}}</em>
			</CarouselItem>
    </Carousel>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Carousel from '@/components/carousel';
  import CarouselItem from '@/components/carousel-item';

  export default {
    components: {
      Row,
      Col,
      Carousel,
      CarouselItem,
    },
    data: () => {
    	return {
    		myItems: [1, 2, 3]
    	};
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
  .v-carousel__item:nth-child(2n) {
     background-color: #1477e6;
  }
  
  .v-carousel__item:nth-child(2n+1) {
     background-color: #395677;
  }
  em{
  	font-size: 20px;
  	color: #ff0;
  	text-align: center;
  	display: inline-block;
  	width: 100%;
  }
</style>
