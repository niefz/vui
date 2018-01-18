/**
 * Created by niefz on 2018/1/8.
 */
import VDropdownMenu from '../dropdown/src/dropdown-menu';

VDropdownMenu.install = (Vue) => {
  Vue.component(VDropdownMenu.name, VDropdownMenu);
};

export default VDropdownMenu;
