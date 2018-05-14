/**
 * Created by niefz on 2018/1/8.
 */
import VCarouselItem from './src/carousel-item.vue';

VCarouselItem.install = (Vue) => {
  Vue.component(VCarouselItem.name, VCarouselItem);
};

export default VCarouselItem;
