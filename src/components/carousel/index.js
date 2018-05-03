/**
 * Created by niefz on 2018/1/8.
 */
import VCarousel from './src/carousel.vue';

VCarousel.install = (Vue) => {
  Vue.component(VCarousel.name, VCard);
};

export default VCarousel;
