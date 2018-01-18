/**
 * Created by niefz on 2018/1/8.
 */
import VDropdownMenuItem from '../dropdown/src/dropdown-menu-item';

VDropdownMenuItem.install = (Vue) => {
  Vue.component(VDropdownMenuItem.name, VDropdownMenuItem);
};

export default VDropdownMenuItem;
