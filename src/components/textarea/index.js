/**
 * Created by niefz on 2018/1/8.
 */
import VTextarea from './src/textarea.vue';

VTextarea.install = (Vue) => {
  Vue.component(VTextarea.name, VTextarea);
};

export default VTextarea;
