/**
 * Created by niefz on 2018/1/8.
 */
import Calendar from './src/calendar.vue';

Calendar.install = (Vue) => {
  Vue.component(Calendar.name, Calendar);
};

export default Calendar;
