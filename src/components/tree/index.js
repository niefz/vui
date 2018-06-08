/**
 * Created by niefz on 2018/1/8.
 */
import Tree from './src/tree.vue';

Tree.install = (Vue) => {
  Vue.component(Tree.name, Tree);
};

export default Tree;
