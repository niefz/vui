/**
 * Created by niefz on 2018/1/8.
 */
import Button from './src/button.vue';

Button.install = (Vue) => {
  Vue.component(Button.name, Button);
};

export default Button;
