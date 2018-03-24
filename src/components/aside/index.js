/**
 * Created by niefz on 2018/1/8.
 */
import VAside from './src/aside';

VAside.install = (Vue) => {
  Vue.component(VAside.name, VAside);
};

export default VAside;