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
      path: '/zh-CN/components/dropdown',
      name: 'dropdown',
      component: dropdown => require.ensure([], (require) => {
        dropdown(require('../docs/zh-CN/dropdown.md'));
      }, 'dropdown'),
    },
    {
      path: '/zh-CN/components/input',
      name: 'input',
      component: input => require.ensure([], (require) => {
        input(require('../docs/zh-CN/input.md'));
      }, 'input'),
    },
    {
      path: '/zh-CN/components/checkbox',
      name: 'checkbox',
      component: checkbox => require.ensure([], (require) => {
        checkbox(require('../docs/zh-CN/checkbox.md'));
      }, 'checkbox'),
    },
    {
      path: '/zh-CN/components/radio',
      name: 'radio',
      component: radio => require.ensure([], (require) => {
        radio(require('../docs/zh-CN/radio.md'));
      }, 'radio'),
    },
    {
      path: '/zh-CN/components/select',
      name: 'select',
      component: select => require.ensure([], (require) => {
        select(require('../docs/zh-CN/select.md'));
      }, 'select'),
    },
    {
      path: '/zh-CN/components/badge',
      name: 'badge',
      component: badge => require.ensure([], (require) => {
        badge(require('../docs/zh-CN/badge.md'));
      }, 'badge'),
    },
    {
      path: '/zh-CN/components/tag',
      name: 'tag',
      component: tag => require.ensure([], (require) => {
        tag(require('../docs/zh-CN/tag.md'));
      }, 'tag'),
    },
    {
      path: '/zh-CN/components/progress',
      name: 'progress',
      component: progress => require.ensure([], (require) => {
        progress(require('../docs/zh-CN/progress.md'));
      }, 'progress'),
    },
    {
      path: '/zh-CN/components/divider',
      name: 'divider',
      component: divider => require.ensure([], (require) => {
        divider(require('../docs/zh-CN/divider.md'));
      }, 'divider'),
    },
  ]
};