/**
 * Created by niefz on 2018/1/8.
 */
import VAvatar from './src/avatar.vue';

VAvatar.install = (Vue) => {
  Vue.component(VAvatar.name, VAvatar);
};

export default VAvatar;
