/**
 * Created by niefz on 2018/1/8.
 */
import VCollapseTransition from './src/collapse-transition';

VCollapseTransition.install = (Vue) => {
  Vue.component(VCollapseTransition.name, VCollapseTransition);
};

export default VCollapseTransition;