/**
 * Created by niefz on 2018/1/8.
 */
import VLayout from './src/layout';

VLayout.install = function(Vue) {
  Vue.component(VLayout.name, VLayout);
};

export default VLayout;