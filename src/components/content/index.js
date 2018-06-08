/**
 * Created by niefz on 2018/1/8.
 */
import Content from './src/content.vue';

Content.install = (Vue) => {
  Vue.component(Content.name, Content);
};

export default Content;
