/**
 * Created by niefz on 2018/1/8.
 */
import VMenuItem from './src/menu-item';

VMenuItem.install = (Vue) => {
  Vue.component(VMenuItem.name, VMenuItem);
};

export default VMenuItem;
