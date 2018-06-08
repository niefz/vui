/**
 * Created by niefz on 2018/1/8.
 */
import Popover from './src/popover.vue';

Popover.install = (Vue) => {
  Vue.component(Popover.name, Popover);
};

export default Popover;
