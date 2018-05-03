/**
 * Created by niefz on 2018/1/8.
 */
import VScrollbar from './src/scrollbar.vue';

VScrollbar.install = (Vue) => {
  Vue.component(VScrollbar.name, VScrollbar);
};

export default VScrollbar;
