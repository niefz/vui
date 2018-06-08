/**
 * Created by niefz on 2018/1/8.
 */
import Badge from './src/badge.vue';

Badge.install = (Vue) => {
  Vue.component(Badge.name, Badge);
};

export default Badge;
