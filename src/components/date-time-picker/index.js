/**
 * Created by niefz on 2018/1/8.
 */
import DateTimePicker from './src/picker.vue';

DateTimePicker.install = (Vue) => {
  Vue.component(DateTimePicker.name, DateTimePicker);
};

export default DateTimePicker;
