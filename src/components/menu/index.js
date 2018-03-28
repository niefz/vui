/**
 * Created by niefz on 2018/1/8.
 */
import VMenu from './src/menu';

VMenu.install = (Vue) => {
  Vue.component(VMenu.name, VMenu);
};

export default VMenu;
