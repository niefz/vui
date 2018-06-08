/**
 * Created by niefz on 2018/1/8.
 */
import ButtonGroup from './src/button-group.vue';

ButtonGroup.install = (Vue) => {
  Vue.component(ButtonGroup.name, ButtonGroup);
};

export default ButtonGroup;
