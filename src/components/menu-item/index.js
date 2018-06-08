/**
 * Created by niefz on 2018/1/8.
 */
import MenuItem from './src/menu-item.vue';

MenuItem.install = (Vue) => {
  Vue.component(MenuItem.name, MenuItem);
};

export default MenuItem;
