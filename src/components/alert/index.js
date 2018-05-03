/**
 * Created by niefz on 2018/1/8.
 */
import VAlert from './src/alert.vue';

VAlert.install = (Vue) => {
  Vue.component(VAlert.name, VAlert);
};

export default VAlert;
