/**
 * Created by niefz on 2018/1/8.
 */
import VRate from './src/rate';

VRate.install = (Vue) => {
  Vue.component(VRate.name, VRate);
};

export default VRate;