/**
 * Created by niefz on 2018/1/8.
 */
import VLoadingBar from './src/loading-bar.vue';

VLoadingBar.install = (Vue) => {
  Vue.component(VLoadingBar.name, VLoadingBar);
};

export default VLoadingBar;
