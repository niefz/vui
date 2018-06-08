import LoadingBar from "../../src/components/loading-bar/src/loading-bar";

/**
 * Created by niefz on 2018/1/8.
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
      path: '/zh-CN/components/layout',
      name: 'Layout 布局',
      component: layout => require.ensure([], (require) => {
        layout(require('../docs/zh-CN/layout.md'));
      }, 'layout'),
    },
    {
      path: '/zh-CN/components/affix',
      name: 'Affix 固钉',
      component: affix => require.ensure([], (require) => {
        affix(require('../docs/zh-CN/affix.md'));
      }, 'affix'),
    },
    {
      path: '/zh-CN/components/anchor',
      name: 'Anchor 锚点',
      component: anchor => require.ensure([], (require) => {
        anchor(require('../docs/zh-CN/anchor.md'));
      }, 'anchor'),
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
      name: 'Menu 导航菜单',
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
      path: '/zh-CN/components/date-time-picker',
      name: 'DateTimePicker 日期时间选择器',
      component: dateTimePicker => require.ensure([], (require) => {
        dateTimePicker(require('../docs/zh-CN/date-time-picker.md'));
      }, 'date-time-picker'),
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
      path: '/zh-CN/components/rate',
      name: 'Rate 评分',
      component: rate => require.ensure([], (require) => {
        rate(require('../docs/zh-CN/rate.md'));
      }, 'rate'),
    },
    {
      path: '/zh-CN/components/select',
      name: 'Select 选择器',
      component: select => require.ensure([], (require) => {
        select(require('../docs/zh-CN/select.md'));
      }, 'select'),
    },
    {
      path: '/zh-CN/components/slider',
      name: 'Slider 滑块',
      component: slider => require.ensure([], (require) => {
        slider(require('../docs/zh-CN/slider.md'));
      }, 'slider'),
    },
    {
      path: '/zh-CN/components/toggle',
      name: 'Toggle 开关',
      component: toggle => require.ensure([], (require) => {
        toggle(require('../docs/zh-CN/toggle.md'));
      }, 'toggle'),
    },
    {
      path: '/zh-CN/components/upload',
      name: 'Upload 上传',
      component: upload => require.ensure([], (require) => {
        upload(require('../docs/zh-CN/upload.md'));
      }, 'upload'),
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
      path: '/zh-CN/components/carousel',
      name: 'Carousel 走马灯',
      component: carousel => require.ensure([], (require) => {
        carousel(require('../docs/zh-CN/carousel.md'));
      }, 'carousel'),
    },
    {
      path: '/zh-CN/components/collapse',
      name: 'Collapse 折叠面板',
      component: collapse => require.ensure([], (require) => {
        collapse(require('../docs/zh-CN/collapse.md'));
      }, 'collapse'),
    },
    {
      path: '/zh-CN/components/popover',
      name: 'Popover 气泡框',
      component: popover => require.ensure([], (require) => {
        popover(require('../docs/zh-CN/popover.md'));
      }, 'popover'),
    },
    {
      path: '/zh-CN/components/empty',
      name: 'Empty 空提示',
      component: empty => require.ensure([], (require) => {
        empty(require('../docs/zh-CN/empty.md'));
      }, 'empty'),
    },
    {
      path: '/zh-CN/components/tooltip',
      name: 'Tooltip 文字提示',
      component: tooltip => require.ensure([], (require) => {
        tooltip(require('../docs/zh-CN/tooltip.md'));
      }, 'tooltip'),
    },
    {
      path: '/zh-CN/components/timeline',
      name: 'Timeline 时间轴',
      component: timeline => require.ensure([], (require) => {
        timeline(require('../docs/zh-CN/timeline.md'));
      }, 'timeline'),
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
      }, 'alert'),
    },
    {
      path: '/zh-CN/components/drawer',
      name: 'Drawer 抽屉',
      component: drawer => require.ensure([], (require) => {
        drawer(require('../docs/zh-CN/drawer.md'));
      }, 'drawer'),
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
      path: '/zh-CN/components/progress-bar',
      name: 'ProgressBar 进度条',
      component: ProgressBar => require.ensure([], (require) => {
        ProgressBar(require('../docs/zh-CN/progress-bar.md'));
      }, 'progress'),
    },
    {
      path: '/zh-CN/components/loading-bar',
      name: 'LoadingBar 加载进度条',
      component: LoadingBar => require.ensure([], (require) => {
        LoadingBar(require('../docs/zh-CN/loading-bar.md'));
      }, 'loading-bar'),
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