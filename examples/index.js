/**
 * Created by niefz on 2017/11/28.
 */
import Vue from 'vue';

/**
 * import plugins
 */
import VueRouter from 'vue-router';

import Router from './config/routers.config';

/**
 * 路由
 */
Vue.use(VueRouter);

import App from './app.vue';

const vui = new Vue({
  el: '.wrapper',
  router: new VueRouter(Router),
  render: h => h(App),
});

export default { vui };
