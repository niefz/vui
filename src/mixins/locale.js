/**
 * Created by niefz on 2018/1/8.
 */
import { t } from '@/locale';

export default {
  methods: {
    t(...args) {
      return t.apply(this, args);
    }
  }
};
