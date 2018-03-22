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
        color(require('../docs/zh-CN/color.md'));
      }, 'color'),
    },
    {
      path: '/zh-CN/components/icon',
      name: 'icon',
      component: icon => require.ensure([], (require) => {
        icon(require('../docs/zh-CN/icon.md'));
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
        grid(require('../docs/zh-CN/grid.md'));
      }, 'grid'),
    },
    {
      path: '/zh-CN/components/breadcrumb',
      name: 'breadcrumb',
      component: breadcrumb => require.ensure([], (require) => {
        breadcrumb(require('../docs/zh-CN/breadcrumb.md'));
      }, 'breadcrumb'),
    },
    {
      path: '/zh-CN/components/progress',
      name: 'progress',
      component: progress => require.ensure([], (require) => {
        progress(require('../docs/zh-CN/progress.md'));
      }, 'progress'),
    },
  ]
};