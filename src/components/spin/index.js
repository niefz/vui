/**
 * Created by niefz on 2018/1/8.
 */
import VSpin from './src/spin';

VSpin.install = (Vue) => {
  Vue.component(VSpin.name, VSpin);
};

export default VSpin;