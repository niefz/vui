/**
 * Created by niefz on 2018/1/8.
 */
import CollapseTransition from './src/collapse-transition.vue';

CollapseTransition.install = (Vue) => {
  Vue.component(CollapseTransition.name, CollapseTransition);
};

export default CollapseTransition;
