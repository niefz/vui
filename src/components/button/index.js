/**
 * Created by niefz on 2018/1/8.
 */
import VButton from './src/button';

VButton.install = function(Vue) {
  Vue.component(VButton.name, VButton);
};

export default VButton;