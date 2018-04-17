/**
 * Created by niefz on 2018/1/8.
 */
import VStep from './src/steps';

VStep.install = (Vue) => {
  Vue.component(VStep.name, VStep);
};

export default VStep;
