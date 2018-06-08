/**
 * Created by niefz on 2018/1/8.
 */
import Col from './src/col.vue';

Col.install = (Vue) => {
  Vue.component(Col.name, Col);
};

export default Col;
