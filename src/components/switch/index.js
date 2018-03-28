/**
 * Created by niefz on 2018/1/8.
 */
import VSwitch from './src/switch';

VSwitch.install = (Vue) => {
  Vue.component(VSwitch.name, VSwitch);
};

export default VSwitch;
