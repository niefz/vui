/**
 * Created by niefz on 2018/1/8.
 */
import VTimelineItem from './src/timeline-item.vue';

VTimelineItem.install = (Vue) => {
  Vue.component(VTimelineItem.name, VTimelineItem);
};

export default VTimelineItem;
