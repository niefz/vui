/**
 * Created by niefz on 2018/1/8.
 */
import VTooltip from './src/tooltip.vue';

VTooltip.install = (Vue) => {
  Vue.component(VTooltip.name, VTooltip);
};

export default VTooltip;
