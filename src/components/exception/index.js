/**
 * Created by niefz on 2018/1/8.
 */
import VException from './src/exception.vue';

VException.install = (Vue) => {
  Vue.component(VException.name, VException);
};

export default VException;
