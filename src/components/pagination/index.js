/**
 * Created by niefz on 2018/1/8.
 */
import VPagination from './src/pagination';

VPagination.install = (Vue) => {
  Vue.component(VPagination.name, VPagination);
};

export default VPagination;
