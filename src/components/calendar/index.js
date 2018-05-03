/**
 * Created by niefz on 2018/1/8.
 */
import VCalendar from './src/calendar.vue';

VCalendar.install = (Vue) => {
  Vue.component(VCalendar.name, VCalendar);
};

export default VCalendar;
