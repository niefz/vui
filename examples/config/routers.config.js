/**
 * Created by niefz on 2018/1/17.
 */
export default {
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/zh-CN/themes/font',
      name: 'font',
      component: font => require.ensure([], (require) => {
        font(require('../docs/zh-CN/font.md'));
      }, 'font'),
    },
    {
      path: '/zh-CN/themes/color',
      name: 'color',
      component: color => require.ensure([], (require) => {
        color(require('../templates/themes/color.vue'));
      }, 'color'),
    },
    {
      path: '/zh-CN/components/icon',
      name: 'icon',
      component: icon => require.ensure([], (require) => {
        icon(require('../templates/components/icon.vue'));
      }, 'icon'),
    },
    {
      path: '/zh-CN/components/button',
      name: 'button',
      component: button => require.ensure([], (require) => {
        button(require('../docs/zh-CN/button.md'));
      }, 'button'),
    },
    {
      path: '/zh-CN/components/grid',
      name: 'grid',
      component: grid => require.ensure([], (require) => {
        grid(require('../templates/components/grid.vue'));
      }, 'grid'),
    },
    {
      path: '/zh-CN/components/breadcrumb',
      name: 'breadcrumb',
      component: breadcrumb => require.ensure([], (require) => {
        breadcrumb(require('../templates/components/breadcrumb.vue'));
      }, 'breadcrumb'),
    },
    {
      path: '/zh-CN/components/datetime-picker',
      name: 'dateTimePicker',
      component: dateTimePicker => require.ensure([], (require) => {
        dateTimePicker(require('../templates/components/datetimepicker.vue'));
      }, 'dateTimePicker'),
    },
  ]
};