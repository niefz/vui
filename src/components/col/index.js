/**
 * Created by niefz on 2018/1/8.
 */
import VCol from './src/col.vue';

VCol.install = (Vue) => {
  Vue.component(VCol.name, VCol);
};

export default VCol;
