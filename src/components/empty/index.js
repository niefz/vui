/**
 * Created by niefz on 2018/1/8.
 */
import VEmpty from './src/empty';

VEmpty.install = (Vue) => {
  Vue.component(VEmpty.name, VEmpty);
};

export default VEmpty;