<template>
  <div class="wrapper">
    <header class="header clearfix">
      <v-row>
        <a class="header-logo">
          Free-ui
        </a>
        <div class="versions">
          <v-dropdown trigger="click">
            <v-button suffix-icon="v-icon-arrow-down">1.0.0</v-button>
            <v-dropdown-menu slot="dropdown">
              <v-dropdown-menu-item value="1.0.0">1.0.0</v-dropdown-menu-item>
            </v-dropdown-menu>
          </v-dropdown>
        </div>
        <div class="menu">
          <v-menu :height="64" mode="horizontal">
            <v-menu-item to="/#/zh-CN/introduce">首页</v-menu-item>
            <v-menu-item to="/#/zh-CN/design">设计</v-menu-item>
            <v-menu-item to="/#/zh-CN/changelog">组件</v-menu-item>
            <v-menu-item href="https://pro.free-ui.design/">PRO</v-menu-item>
          </v-menu>
        </div>
      </v-row>
    </header>
    <div class="main">
      <v-row>
        <div class="side-nav">
          <v-menu :default-opens="defaultOpens" :default-active="defaultActive" :indent="40">
            <template v-for="(nav, index) in nav">
              <template v-if="nav.path">
                <v-menu-item :to="nav.path">{{ nav.name }}</v-menu-item>
              </template>
              <v-menu-sub :index="nav.index" v-else>
                <template slot="title">
                  {{ nav.name }}
                </template>
                <template v-if="nav.child">
                  <v-menu-item
                    :to="child.path"
                    :key="index"
                    v-for="(child, index) in nav.child">
                    {{ child.name }}
                  </v-menu-item>
                </template>
                <template v-if="nav.groups">
                  <v-menu-item-group
                    :key="index"
                    v-for="(group, index) in nav.groups">
                    <template slot="title">
                      {{ group.name }}
                    </template>
                    <v-menu-item
                      :to="child.path"
                      :key="index"
                      v-for="(child, index) in group.child">
                      {{ child.name }}
                    </v-menu-item>
                  </v-menu-item-group>
                </template>
              </v-menu-sub>
            </template>
          </v-menu>
        </div>
        <div class="container">
          <router-view></router-view>
        </div>
      </v-row>
    </div>
    <!--<footer class="footer clearfix">-->
    <!--<div class="footer-wrapper">-->
    <!--<v-row>-->
    <!--<v-col :xs="24" :sm="24" :md="6">-->
    <!--<div class="footer-wrapper&#45;&#45;inner">-->
    <!--<h2>链接</h2>-->
    <!--<a href="https://github.com/FreeUI/vui" target="_blank">GitHub</a>-->
    <!--<a href="https://github.com/FreeUI/vui/releases" target="_blank">更新日志</a>-->
    <!--<a href="https://github.com/FreeUI/vui/FAQ.md" target="_blank">常见问题</a>-->
    <!--<a href="https://github.com/FreeUI/vui-cli" target="_blank">脚手架</a>-->
    <!--</div>-->
    <!--</v-col>-->
    <!--<v-col :xs="24" :sm="24" :md="6">-->
    <!--<div class="footer-wrapper&#45;&#45;inner">-->
    <!--<h2>社区</h2>-->
    <!--<a href="https://gitter.im/FreeUI/vui" target="_blank">在线讨论</a>-->
    <!--<a href="https://github.com/FreeUI/vui/issues" target="_blank">反馈意见</a>-->
    <!--<a href="https://github.com/FreeUI/vui/CONTRIBUTING.zh-CN.md" target="_blank">贡献指南</a>-->
    <!--<a href="https://stackoverflow.com/questions/tagged/FreeUI/vui" target="_blank">StackOverflow</a>-->
    <!--<a href="https://segmentfault.com/t/FreeUI/vui" target="_blank">SegmentFault</a>-->
    <!--</div>-->
    <!--</v-col>-->
    <!--<v-col :xs="24" :sm="24" :md="6">-->
    <!--<div class="footer-wrapper&#45;&#45;inner">-->
    <!--<h2>多语言</h2>-->
    <!--<a href="http://free-ui.cn" target="_blank">中文版</a>-->
    <!--<a href="http://free-ui.io" target="_blank">English Version</a>-->
    <!--</div>-->
    <!--</v-col>-->
    <!--</v-row>-->
    <!--</div>-->
    <!--</footer>-->
  </div>
</template>
<script>
  import 'highlight.js/styles/color-brewer.css';
  import nav from './nav.json';
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Menu from '@/components/menu';
  import MenuSub from '@/components/menu-sub';
  import MenuItem from '@/components/menu-item';
  import MenuItemGroup from '@/components/menu-item-group';
  import Badge from '@/components/badge';
  import Button from '@/components/button';
  import Dropdown from '@/components/dropdown';
  import DropdownMenu from '@/components/dropdown-menu';
  import DropdownMenuItem from '@/components/dropdown-menu-item';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VMenu: Menu,
      VMenuSub: MenuSub,
      VMenuItem: MenuItem,
      VMenuItemGroup: MenuItemGroup,
      VBadge: Badge,
      VButton: Button,
      VDropdown: Dropdown,
      VDropdownMenu: DropdownMenu,
      VDropdownMenuItem: DropdownMenuItem,
    },
    data() {
      return {
        nav,
        defaultOpens: '',
        defaultActive: '',
      };
    },
    watch: {
      $route(val, old) {
        this.defaultActive = val.path;
        document.documentElement.scrollTop = 0;
        if (old.path !== '/') return;
        this.defaultOpens = val.path;
      },
    },
  };
</script>
<style lang="scss" scoped>
  @import "../src/styles/index.scss";

  html, body, .wrapper {
    height: 100%;
  }

  .header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 10;
    background-color: $color-primary;
    box-shadow: 0 2px 5px $color-background;
    box-sizing: border-box;
    color: $color-white;
    transition: all .3s;
    &-logo {
      float: left;
      height: 64px;
      padding-left: 40px;
      font-size: 18px;
      line-height: 64px;
      white-space: nowrap;
      overflow: hidden;
      img {
        height: 32px;
        margin-right: 16px;
      }
    }
    .menu, .versions {
      float: right;
    }
    .menu .v-menu--item {
      &.active, &:hover {
        opacity: .8;
        color: $color-white;
      }
    }
    .versions {
      margin: 16px 40px 16px 20px;
      .v-btn {
        border-color: $color-white;
      }
    }
  }

  .main {
    padding-top: 84px;
    padding-bottom: 20px;
    .side-nav {
      position: fixed;
      top: 84px;
      bottom: 20px;
      left: 0;
      width: 280px;
      border-right: 1px solid $color-divider;
      box-sizing: border-box;
      .v-menu {
        width: calc(100% + 1px);
        height: 100%;
        overflow-y: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
    .container {
      padding-left: 280px;
    }
    .article {
      padding: 20px 248px 0 48px;
      > h1 {
        display: inline-block;
        margin-top: 10px;
        margin-bottom: 10px;
        font-weight: 500;
        font-size: 24px;
        &:after {
          display: block;
          content: "";
          width: 50%;
          height: 1px;
          margin: 20px 0 10px;
          background-color: $color-divider;
          clear: both;
        }
      }
      > h2 {
        margin-top: 30px;
        margin-bottom: 20px;
        font-weight: 500;
        font-size: 16px;
      }
      ol > li {
        margin-left: 20px;
        padding-left: 4px;
        list-style-type: decimal;
        font-size: 14px;
        line-height: 28px;
      }
      > p {
        margin-top: 1em;
        margin-bottom: 1em;
        font-size: 14px;
        line-height: 28px;
      }
      .hljs {
        padding: 20px;
        border: 1px solid $color-border;
        background-color: $color-background;
        border-radius: $border-radius;
        font-family: Lucida Console, Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
        font-size: 12px;
        line-height: 2;
      }
      .table {
        width: 100%;
        margin-bottom: 50px;
        font-size: 14px;
        border-collapse: collapse;
        overflow: auto;
        th {
          padding: 10px;
          border: 1px solid $color-border;
          background-color: $color-thead-background;
          text-align: left;
        }
        td {
          padding: 10px;
          border: 1px solid $color-border;
          text-align: left;
        }
      }
      .v-row + .v-row {
        margin-top: 10px;
      }
    }
  }

  .footer {
    position: relative;
    background-color: $color-black;
    &-wrapper {
      padding: 86px 144px;
      &--inner {
        display: inline-block;
        text-align: left;
        h2 {
          position: relative;
          margin-bottom: 24px;
          font-weight: 500;
          font-size: 16px;
          color: $color-white;
        }
        a {
          display: block;
          margin: 12px 0;
          font-size: 14px;
          color: hsla(0, 0%, 100%, .9);
          &:hover {
            color: $color-primary-hover;
          }
        }
      }
    }
  }
</style>