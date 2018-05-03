/**
 * Created by niefz on 2018/1/8.
 */
import VTimeline from './src/timeline.vue';

VTimeline.install = (Vue) => {
  Vue.component(VTimeline.name, VTimeline);
};

export default VTimeline;
