/**
 * Created by niefz on 2018/1/8.
 */
import MenuGroup from './src/menu-group.vue';

MenuGroup.install = (Vue) => {
  Vue.component(MenuGroup.name, MenuGroup);
};

export default MenuGroup;
