/**
 * Created by niefz on 2018/1/8.
 */
import VBadge from './src/badge';

VBadge.install = (Vue) => {
  Vue.component(VBadge.name, VBadge);
};

export default VBadge;
