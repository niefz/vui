/**
 * Created by niefz on 2018/1/8.
 */
import Layout from './src/layout.vue';

Layout.install = (Vue) => {
  Vue.component(Layout.name, Layout);
};

export default Layout;
