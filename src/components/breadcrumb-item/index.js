/**
 * Created by niefz on 2018/1/8.
 */
import BreadcrumbItem from './src/breadcrumb-item.vue';

BreadcrumbItem.install = (Vue) => {
  Vue.component(BreadcrumbItem.name, BreadcrumbItem);
};

export default BreadcrumbItem;
