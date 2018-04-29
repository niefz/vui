/**
 * Created by niefz on 2018/1/8.
 */
import VSlider from './src/slider';

VSlider.install = (Vue) => {
  Vue.component(VSlider.name, VSlider);
};

export default VSlider;