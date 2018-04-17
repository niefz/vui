/**
 * Created by niefz on 2018/1/8.
 */
import VTable from './src/table';

VTable.install = (Vue) => {
  Vue.component(VTable.name, VTable);
};

export default VTable;
