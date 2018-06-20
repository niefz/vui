# Carousel 走马灯

走马灯

## 基本用法

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

## API

Carousel props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| height | 幻灯片高度 | string | - | - |
| autoplay | 自动播放 | boolean | - | true |
| interval | 播放间隔(ms) | number | - | 3000 |
| indicators | 是否展示指示器 | boolean | - | true |
| arrows | 是否展示箭头 | boolean | - | true |

Carousel events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 滚动发生变化时的回调函数 | 依次是两个：当前index值, 上一个index值 |

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
  .v-carousel--item:nth-child(2n) {
     background-color: #1477e6;
  }
  
  .v-carousel--item:nth-child(2n+1) {
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
