/**
 * Created by niefz on 2018/1/8.
 */
import ProgressBar from './src/progress.vue';

ProgressBar.install = (Vue) => {
  Vue.component(ProgressBar.name, ProgressBar);
};

export default ProgressBar;
