/**
 * Created by niefz on 2018/1/8.
 */
import VAnchor from './src/anchor';

VAnchor.install = (Vue) => {
  Vue.component(VAnchor.name, VAnchor);
};

export default VAnchor;
