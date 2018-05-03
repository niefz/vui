/**
 * Created by niefz on 2018/1/8.
 */
import VPopover from './src/popover.vue';

VPopover.install = (Vue) => {
  Vue.component(VPopover.name, VPopover);
};

export default VPopover;
