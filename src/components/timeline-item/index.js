/**
 * Created by niefz on 2018/1/8.
 */
import TimelineItem from './src/timeline-item.vue';

TimelineItem.install = (Vue) => {
  Vue.component(TimelineItem.name, TimelineItem);
};

export default TimelineItem;
