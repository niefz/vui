/**
 * Created by niefz on 2018/1/8.
 */
import Tooltip from './src/tooltip.vue';

Tooltip.install = (Vue) => {
  Vue.component(Tooltip.name, Tooltip);
};

export default Tooltip;
