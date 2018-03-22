/**
 * Created by niefz on 2018/1/8.
 */
import VProgress from './src/progress';

VProgress.install = function(Vue) {
  Vue.component(VProgress.name, VProgress);
};

export default VProgress;