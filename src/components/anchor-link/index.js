/**
 * Created by niefz on 2018/1/8.
 */
import VAnchorLink from './src/anchor-link';

VAnchorLink.install = (Vue) => {
  Vue.component(VAnchorLink.name, VAnchorLink);
};

export default VAnchorLink;