/**
 * Created by niefz on 2018/1/8.
 */
import VTag from './src/tag';

VTag.install = function(Vue) {
  Vue.component(VTag.name, VTag);
};

export default VTag;
