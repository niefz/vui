/**
 * Created by niefz on 2018/1/8.
 */
import Card from './src/card.vue';

Card.install = (Vue) => {
  Vue.component(Card.name, Card);
};

export default Card;
