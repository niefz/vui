/**
 * Created by niefz on 2018/1/8.
 */
import Modal from './src/modal.vue';

Modal.install = (Vue) => {
  Vue.component(Modal.name, Modal);
};

export default Modal;
