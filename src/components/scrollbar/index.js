/**
 * Created by niefz on 2018/1/8.
 */
import Scrollbar from './src/scrollbar.vue';

Scrollbar.install = (Vue) => {
  Vue.component(Scrollbar.name, Scrollbar);
};

export default Scrollbar;
