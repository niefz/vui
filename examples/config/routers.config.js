/**
 * Created by niefz on 2018/1/17.
 */
export default {
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/button',
      name: 'button',
      component: button => require.ensure([], (require) => {
        button(require('../templates/button.vue'));
      }, 'button'),
    },
  ]
};