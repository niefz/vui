/**
 * Created by niefz on 2018/1/8.
 */
import Upload from './src/upload.vue';

Upload.install = (Vue) => {
  Vue.component(Upload.name, Upload);
};

export default Upload;
