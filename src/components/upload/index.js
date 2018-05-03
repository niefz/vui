/**
 * Created by niefz on 2018/1/8.
 */
import VUpload from './src/upload.vue';

VUpload.install = (Vue) => {
  Vue.component(VUpload.name, VUpload);
};

export default VUpload;
