/**
 * Created by niefz on 2018/1/8.
 */
import Vtree from './src/tree';

Vtree.install = (Vue) => {
  Vue.component(Vtree.name, Vtree);
};

export default Vtree;