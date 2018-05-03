/**
 * Created by niefz on 2018/1/8.
 */
import VModal from './src/modal.vue';

VModal.install = (Vue) => {
  Vue.component(VModal.name, VModal);
};

export default VModal;
