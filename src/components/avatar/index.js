/**
 * Created by niefz on 2018/1/8.
 */
import Avatar from './src/avatar.vue';

Avatar.install = (Vue) => {
  Vue.component(Avatar.name, Avatar);
};

export default Avatar;
