/**
 * Created by niefz on 2018/1/8.
 */
import VBreadcrumb from './src/breadcrumb';

VBreadcrumb.install = function(Vue) {
  Vue.component(VBreadcrumb.name, VBreadcrumb);
};

export default VBreadcrumb;