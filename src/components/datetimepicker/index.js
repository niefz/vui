/**
 * Created by niefz on 2018/1/8.
 */
import VDateTimePicker from './src/picker';

VDateTimePicker.install = function(Vue) {
  Vue.component(VDateTimePicker.name, VDateTimePicker);
};

export default VDateTimePicker;