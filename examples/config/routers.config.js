/**
 * Created by niefz on 2018/1/17.
 */
export default {
  mode: 'hash',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/zh-CN/themes/font',
      name: 'Font 字体',
      component: font => require.ensure([], (require) => {
        font(require('../docs/zh-CN/font.md'));
      }, 'font'),
    },
    {
      path: '/zh-CN/themes/color',
      name: 'Color 色彩',
      component: color => require.ensure([], (require) => {
        color(require('../docs/zh-CN/color.md'));
      }, 'color'),
    },
    {
      path: '/zh-CN/components/button',
      name: 'Button 按钮',
      component: button => require.ensure([], (require) => {
        button(require('../docs/zh-CN/button.md'));
      }, 'button'),
    },
    {
      path: '/zh-CN/components/icon',
      name: 'Icon 图标',
      component: icon => require.ensure([], (require) => {
        icon(require('../docs/zh-CN/icon.md'));
      }, 'icon'),
    },
    {
      path: '/zh-CN/components/grid',
      name: 'Grid 栅格',
      component: grid => require.ensure([], (require) => {
        grid(require('../docs/zh-CN/grid.md'));
      }, 'grid'),
    },
    {
      path: '/zh-CN/components/anchor',
      name: 'Anchor 锚点',
      component: anchor => require.ensure([], (require) => {
        anchor(require('../docs/zh-CN/anchor.md'));
      }, 'anchor'),
    },
    {
      path: '/zh-CN/components/affix',
      name: 'Affix 固钉',
      component: affix => require.ensure([], (require) => {
        affix(require('../docs/zh-CN/affix.md'));
      }, 'affix'),
    },
    {
      path: '/zh-CN/components/breadcrumb',
      name: 'Breadcrumb 面包屑',
      component: breadcrumb => require.ensure([], (require) => {
        breadcrumb(require('../docs/zh-CN/breadcrumb.md'));
      }, 'breadcrumb'),
    },
    {
      path: '/zh-CN/components/dropdown',
      name: 'Dropdown 下拉菜单',
      component: dropdown => require.ensure([], (require) => {
        dropdown(require('../docs/zh-CN/dropdown.md'));
      }, 'dropdown'),
    },
    {
      path: '/zh-CN/components/menu',
      name: 'Menu 菜单',
      component: menu => require.ensure([], (require) => {
        menu(require('../docs/zh-CN/menu.md'));
      }, 'menu'),
    },
    {
      path: '/zh-CN/components/pagination',
      name: 'Pagination 分页',
      component: pagination => require.ensure([], (require) => {
        pagination(require('../docs/zh-CN/pagination.md'));
      }, 'pagination'),
    },
    {
      path: '/zh-CN/components/steps',
      name: 'Steps 步骤条',
      component: steps => require.ensure([], (require) => {
        steps(require('../docs/zh-CN/steps.md'));
      }, 'steps'),
    },
    {
      path: '/zh-CN/components/tabs',
      name: 'Tabs 标签页',
      component: tabs => require.ensure([], (require) => {
        tabs(require('../docs/zh-CN/tabs.md'));
      }, 'tabs'),
    },
    {
      path: '/zh-CN/components/checkbox',
      name: 'Checkbox 复选框',
      component: checkbox => require.ensure([], (require) => {
        checkbox(require('../docs/zh-CN/checkbox.md'));
      }, 'checkbox'),
    },
    {
      path: '/zh-CN/components/input',
      name: 'Input 输入框',
      component: input => require.ensure([], (require) => {
        input(require('../docs/zh-CN/input.md'));
      }, 'input'),
    },
    {
      path: '/zh-CN/components/input-number',
      name: 'Input 数字输入框',
      component: inputNumber => require.ensure([], (require) => {
        inputNumber(require('../docs/zh-CN/input-number.md'));
      }, 'input-number'),
    },
    {
      path: '/zh-CN/components/radio',
      name: 'Radio 单选框',
      component: radio => require.ensure([], (require) => {
        radio(require('../docs/zh-CN/radio.md'));
      }, 'radio'),
    },
    {
      path: '/zh-CN/components/select',
      name: 'Select 选择器',
      component: select => require.ensure([], (require) => {
        select(require('../docs/zh-CN/select.md'));
      }, 'select'),
    },
    {
      path: '/zh-CN/components/switch',
      name: 'Switch 开关',
      component: switcher => require.ensure([], (require) => {
        switcher(require('../docs/zh-CN/switch.md'));
      }, 'switch'),
    },
    {
      path: '/zh-CN/components/avatar',
      name: 'Avatar 头像',
      component: avatar => require.ensure([], (require) => {
        avatar(require('../docs/zh-CN/avatar.md'));
      }, 'avatar'),
    },
    {
      path: '/zh-CN/components/badge',
      name: 'Badge 徽标',
      component: badge => require.ensure([], (require) => {
        badge(require('../docs/zh-CN/badge.md'));
      }, 'badge'),
    },
    {
      path: '/zh-CN/components/card',
      name: 'Card 卡片',
      component: card => require.ensure([], (require) => {
        card(require('../docs/zh-CN/card.md'));
      }, 'card'),
    },
    {
      path: '/zh-CN/components/empty',
      name: 'Empty 空提示',
      component: empty => require.ensure([], (require) => {
        empty(require('../docs/zh-CN/empty.md'));
      }, 'empty'),
    },
    {
      path: '/zh-CN/components/exception',
      name: 'Exception 异常页',
      component: exception => require.ensure([], (require) => {
        exception(require('../docs/zh-CN/exception.md'));
      }, 'exception'),
    },
    {
      path: '/zh-CN/components/table',
      name: 'Table 表格',
      component: table => require.ensure([], (require) => {
        table(require('../docs/zh-CN/table.md'));
      }, 'table'),
    },
    {
      path: '/zh-CN/components/tag',
      name: 'Tag 标签',
      component: tag => require.ensure([], (require) => {
        tag(require('../docs/zh-CN/tag.md'));
      }, 'tag'),
    },
    {
      path: '/zh-CN/components/tree',
      name: 'Tree 树形控件',
      component: tree => require.ensure([], (require) => {
        tree(require('../docs/zh-CN/tree.md'));
      }, 'tree'),
    },
    {
      path: '/zh-CN/components/alert',
      name: 'Alert 警告提示',
      component: alert => require.ensure([], (require) => {
        alert(require('../docs/zh-CN/alert.md'));
      }, 'Alert 警告'),
    },
    {
      path: '/zh-CN/components/message',
      name: 'Message 全局提示',
      component: message => require.ensure([], (require) => {
        message(require('../docs/zh-CN/message.md'));
      }, 'message'),
    },
    {
      path: '/zh-CN/components/modal',
      name: 'Modal 对话框',
      component: modal => require.ensure([], (require) => {
        modal(require('../docs/zh-CN/modal.md'));
      }, 'modal'),
    },
    {
      path: '/zh-CN/components/notification',
      name: 'Notification 通知提醒',
      component: notification => require.ensure([], (require) => {
        notification(require('../docs/zh-CN/notification.md'));
      }, 'notification'),
    },
    {
      path: '/zh-CN/components/progress',
      name: 'Progress 进度条',
      component: progress => require.ensure([], (require) => {
        progress(require('../docs/zh-CN/progress.md'));
      }, 'progress'),
    },
    {
      path: '/zh-CN/components/spin',
      name: 'Spin 加载中',
      component: spin => require.ensure([], (require) => {
        spin(require('../docs/zh-CN/spin.md'));
      }, 'spin'),
    },
    {
      path: '/zh-CN/components/back-top',
      name: 'BackTop 回到顶部',
      component: backTop => require.ensure([], (require) => {
        backTop(require('../docs/zh-CN/back-top.md'));
      }, 'back-top'),
    },
    {
      path: '/zh-CN/components/divider',
      name: 'Divider 分割线',
      component: divider => require.ensure([], (require) => {
        divider(require('../docs/zh-CN/divider.md'));
      }, 'divider'),
    },
  ]
};