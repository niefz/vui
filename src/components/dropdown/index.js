/**
 * Created by niefz on 2018/1/8.
 */
import VDropdown from './src/dropdown';

VDropdown.install = (Vue) => {
  Vue.component(VDropdown.name, VDropdown);
};

export default VDropdown;