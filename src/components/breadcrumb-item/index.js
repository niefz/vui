/**
 * Created by niefz on 2018/1/8.
 */
import VBreadcrumbItem from '../breadcrumb/src/breadcrumb-item';

VBreadcrumbItem.install = function(Vue) {
  Vue.component(VBreadcrumbItem.name, VBreadcrumbItem);
};

export default VBreadcrumbItem;
