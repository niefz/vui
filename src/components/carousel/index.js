/**
 * Created by niefz on 2018/1/8.
 */
import Carousel from './src/carousel.vue';

Carousel.install = (Vue) => {
  Vue.component(Carousel.name, Carousel);
};

export default Carousel;
