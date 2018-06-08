/**
 * Created by niefz on 2018/1/8.
 */
import AnchorLink from './src/anchor-link.vue';

AnchorLink.install = (Vue) => {
  Vue.component(AnchorLink.name, AnchorLink);
};

export default AnchorLink;
