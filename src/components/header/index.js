/**
 * Created by niefz on 2018/1/8.
 */
import VHeader from './src/header';

VHeader.install = (Vue) => {
  Vue.component(VHeader.name, VHeader);
};

export default VHeader;