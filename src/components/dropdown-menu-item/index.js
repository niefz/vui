/**
 * Created by niefz on 2018/1/8.
 */
import DropdownMenuItem from './src/dropdown-menu-item.vue';

DropdownMenuItem.install = (Vue) => {
  Vue.component(DropdownMenuItem.name, DropdownMenuItem);
};

export default DropdownMenuItem;
