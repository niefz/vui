/**
 * Created by niefz on 2018/1/8.
 */
import DropdownMenu from './src/dropdown-menu.vue';

DropdownMenu.install = (Vue) => {
  Vue.component(DropdownMenu.name, DropdownMenu);
};

export default DropdownMenu;
