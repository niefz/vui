/**
 * Created by niefz on 2018/1/8.
 */
import VContent from './src/content.vue';

VContent.install = (Vue) => {
  Vue.component(VContent.name, VContent);
};

export default VContent;
