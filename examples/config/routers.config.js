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
    {
      path: '/breadcrumb',
      name: 'breadcrumb',
      component: breadcrumb => require.ensure([], (require) => {
        breadcrumb(require('../templates/breadcrumb.vue'));
      }, 'breadcrumb'),
    },
    {
      path: '/dateTimePicker',
      name: 'dateTimePicker',
      component: dateTimePicker => require.ensure([], (require) => {
        dateTimePicker(require('../templates/datetimepicker.vue'));
      }, 'dateTimePicker'),
    },
  ]
};