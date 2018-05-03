/**
 * Created by niefz on 2018/1/8.
 */
import VCard from './src/card.vue';

VCard.install = (Vue) => {
  Vue.component(VCard.name, VCard);
};

export default VCard;
