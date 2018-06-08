/**
 * Created by niefz on 2018/1/8.
 */
import Alert from './src/alert.vue';

Alert.install = (Vue) => {
  Vue.component(Alert.name, Alert);
};

export default Alert;
