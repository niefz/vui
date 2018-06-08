/**
 * Created by niefz on 2018/1/8.
 */
import Menu from './src/menu.vue';

Menu.install = (Vue) => {
  Vue.component(Menu.name, Menu);
};

export default Menu;
