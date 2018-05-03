/**
 * Created by niefz on 2018/1/8.
 */
import Vue from 'vue';

/**
 * import plugins
 */
import VueRouter from 'vue-router';

import Router from './config/routers.config';

import Demo from './components/demo.vue';

/**
 * 路由
 */
Vue.use(VueRouter);

Vue.component('Demo', Demo);

import App from './app.vue';

const vui = new Vue({
  el: '.wrapper',
  router: new VueRouter(Router),
  render: h => h(App),
});

export default { vui };
