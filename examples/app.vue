<template>
  <div class="wrapper">
    <header class="header clearfix">
      <Row>
        <a class="header-logo">
          Free-ui
        </a>
        <div class="versions">
          <Dropdown>
            <Button suffix-icon="v-icon-caret-down">1.0.0</Button>
            <DropdownMenu slot="dropdown">
              <DropdownMenuItem value="1.0.0">1.0.0</DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </div>
        <div class="menu">
          <Menu :height="64" mode="horizontal">
            <MenuItem to="/#/zh-CN/introduce">首页</MenuItem>
            <MenuItem to="/#/zh-CN/design">设计</MenuItem>
            <MenuItem to="/#/zh-CN/changelog">组件</MenuItem>
            <MenuItem href="https://pro.free-ui.design/">PRO</MenuItem>
          </Menu>
        </div>
      </Row>
    </header>
    <div class="main">
      <Row>
        <div class="side-nav">
          <Menu :default-opens="defaultOpens" :default-active="defaultActive" :indent="40">
            <template v-for="(nav, index) in nav">
              <template v-if="nav.path">
                <MenuItem :to="nav.path">{{ nav.name }}</MenuItem>
              </template>
              <MenuSub :index="nav.index" v-else>
                <template slot="title">
                  {{ nav.name }}
                </template>
                <template v-if="nav.child">
                  <MenuItem
                    :to="child.path"
                    :key="index"
                    v-for="(child, index) in nav.child">
                    {{ child.name }}
                  </MenuItem>
                </template>
                <template v-if="nav.groups">
                  <MenuGroup
                    :key="index"
                    v-for="(group, index) in nav.groups">
                    <template slot="title">
                      {{ group.name }}
                    </template>
                    <MenuItem
                      :to="child.path"
                      :key="index"
                      v-for="(child, index) in group.child">
                      {{ child.name }}
                    </MenuItem>
                  </MenuGroup>
                </template>
              </MenuSub>
            </template>
          </Menu>
        </div>
        <div class="container">
          <router-view></router-view>
        </div>
      </Row>
    </div>
    <!--<footer class="footer clearfix">-->
    <!--<div class="footer-wrapper">-->
    <!--<Row>-->
    <!--<Col :xs="24" :sm="24" :md="6">-->
    <!--<div class="footer-wrapper&#45;&#45;inner">-->
    <!--<h2>链接</h2>-->
    <!--<a href="https://github.com/FreeUI/vui" target="_blank">GitHub</a>-->
    <!--<a href="https://github.com/FreeUI/vui/releases" target="_blank">更新日志</a>-->
    <!--<a href="https://github.com/FreeUI/vui/FAQ.md" target="_blank">常见问题</a>-->
    <!--<a href="https://github.com/FreeUI/vui-cli" target="_blank">脚手架</a>-->
    <!--</div>-->
    <!--</Col>-->
    <!--<Col :xs="24" :sm="24" :md="6">-->
    <!--<div class="footer-wrapper&#45;&#45;inner">-->
    <!--<h2>社区</h2>-->
    <!--<a href="https://gitter.im/FreeUI/vui" target="_blank">在线讨论</a>-->
    <!--<a href="https://github.com/FreeUI/vui/issues" target="_blank">反馈意见</a>-->
    <!--<a href="https://github.com/FreeUI/vui/CONTRIBUTING.zh-CN.md" target="_blank">贡献指南</a>-->
    <!--<a href="https://stackoverflow.com/questions/tagged/FreeUI/vui" target="_blank">StackOverflow</a>-->
    <!--<a href="https://segmentfault.com/t/FreeUI/vui" target="_blank">SegmentFault</a>-->
    <!--</div>-->
    <!--</Col>-->
    <!--<Col :xs="24" :sm="24" :md="6">-->
    <!--<div class="footer-wrapper&#45;&#45;inner">-->
    <!--<h2>多语言</h2>-->
    <!--<a href="http://free-ui.cn" target="_blank">中文版</a>-->
    <!--<a href="http://free-ui.io" target="_blank">English Version</a>-->
    <!--</div>-->
    <!--</Col>-->
    <!--</Row>-->
    <!--</div>-->
    <!--</footer>-->
  </div>
</template>
<script>
  import nav from './nav.json';
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Menu from '@/components/menu';
  import MenuSub from '@/components/menu-sub';
  import MenuGroup from '@/components/menu-group';
  import MenuItem from '@/components/menu-item';
  import Button from '@/components/button';
  import Dropdown from '@/components/dropdown';
  import DropdownMenu from '@/components/dropdown-menu';
  import DropdownMenuItem from '@/components/dropdown-menu-item';

  export default {
    components: {
      Row,
      Col,
      Button,
      Menu,
      MenuSub,
      MenuItem,
      MenuGroup,
      Dropdown,
      DropdownMenu,
      DropdownMenuItem,
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
<style lang="scss">
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
    .menu .Menu--item {
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
      padding: 20px 48px 0;
      > h1 {
        display: inline-block;
        margin-top: 8px;
        margin-bottom: 8px;
        font-weight: 500;
        font-size: 24px;
        &:after {
          display: block;
          content: "";
          width: 50%;
          height: 1px;
          margin: 24px 0 10px;
          background-color: $color-divider;
          clear: both;
        }
      }
      > h2, > h3 {
        margin-top: 32px;
        margin-bottom: 24px;
        font-weight: 500;
      }
      > h2 {
        font-size: 20px;
      }
      > h3 {
        font-size: 16px;
      }
      > ul > li, > ol > li {
        margin-left: 20px;
        padding-left: 4px;
        font-size: 14px;
        line-height: 28px;
      }
      > ul > li {
        list-style-type: circle;
      }
      > ol > li {
        list-style-type: decimal;
      }
      > p {
        margin-top: 1em;
        margin-bottom: 1em;
        font-size: 14px;
        letter-spacing: .3px;
        line-height: 24px;
      }
      blockquote {
        margin: 1em 0;
        padding-left: .8em;
        border-left: 4px solid $color-border;
        font-size: 14px;
        a {
          color: $color-primary;
        }
      }
      code {
        border-radius: $border-radius;
      }
      .table {
        width: 100%;
        margin-bottom: 50px;
        font-size: 14px;
        border-collapse: collapse;
        overflow: auto;
        th, td {
          padding: 16px 10px;
          border-bottom: 1px dashed $color-divider;
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
