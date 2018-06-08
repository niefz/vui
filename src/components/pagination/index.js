/**
 * Created by niefz on 2018/1/8.
 */
import Pagination from './src/pagination.vue';

Pagination.install = (Vue) => {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
