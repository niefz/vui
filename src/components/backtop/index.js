/**
 * Created by niefz on 2018/1/8.
 */
import VBacktop from './src/backtop';

VBacktop.install = (Vue) => {
  Vue.component(VBacktop.name, VBacktop);
};

export default VBacktop;
