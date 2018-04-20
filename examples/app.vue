<template>
  <div class="wrapper">
    <header class="header clearfix">
      <v-row>
        <v-col :xs="24" :sm="24" :md="6" :lg="5" :xl="5">
          <a class="header-logo">
            Free Vui
          </a>
        </v-col>
        <v-col :xs="0" :sm="0" :md="18" :lg="19" :xl="20">
          <div class="versions">
            <v-dropdown trigger="click">
              <v-button suffix-icon="v-icon-arrow-down">1.0.1</v-button>
              <v-dropdown-menu slot="dropdown">
                <v-dropdown-menu-item value="1.0.1">1.0.1</v-dropdown-menu-item>
              </v-dropdown-menu>
            </v-dropdown>
          </div>
          <div class="menu">
            <v-menu :height="64" mode="horizontal">
              <v-menu-item to="/#/zh-CN/introduce">首页</v-menu-item>
              <v-menu-item to="/#/zh-CN/design">设计</v-menu-item>
              <v-menu-item to="/#/zh-CN/changelog">组件</v-menu-item>
            </v-menu>
          </div>
        </v-col>
      </v-row>
    </header>
    <div class="main">
      <v-row>
        <v-col :xs="24" :sm="24" :md="24" :lg="5" :xl="4">
          <div class="side-nav">
            <v-menu :default-active="defaultActive" :indent="40">
              <template v-for="(nav, index) in nav">
                <template v-if="nav.path">
                  <v-menu-item :to="nav.path">{{ nav.name }}</v-menu-item>
                </template>
                <v-menu-sub :index="nav.name" v-else>
                  <template slot="title">
                    {{ nav.name }}
                    <i class="v-menu--sub-title-arrow"></i>
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
                      :index="group.name"
                      :key="index"
                      v-for="(group, index) in nav.groups">
                      <template slot="title">
                        {{ group.name }}
                        <i class="v-submenu--title-arrow"></i>
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
        </v-col>
        <v-col :xs="24" :sm="24" :md="24" :lg="19" :xl="20">
          <router-view></router-view>
        </v-col>
      </v-row>
    </div>
    <footer class="clearfix"></footer>
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
        defaultActive: '',
      };
    },
    watch: {
      $route(val) {
        this.defaultActive = val.name;
        document.documentElement.scrollTop = 0;
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="sass">
  @import "../src/styles/index.scss";

  html, body, .wrapper {
    height: 100%;
  }

  .header {
    position: relative;
    z-index: 10;
    width: 100%;
    border-bottom: 1px solid #E8E8E8;
    background-color: $color-FFFFFF;
    box-shadow: 0 2px 8px $color-E8E8E8;
    box-sizing: border-box;
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
    .versions {
      margin: 16px 40px 16px 0;
    }
  }

  .v-scrollbar {
    position: relative;
    height: 100%;
    overflow: hidden;
    &--wrap {
      height: 100%;
      overflow-y: scroll;
    }
  }

  .main {
    padding-top: 40px;
    .side-nav {
      height: 100%;
      border-right: 1px solid #E8E8E8;
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
  }

  .article {
    padding: 40px 160px 0 60px;
    > h1 {
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 38px;
    }
    > h2 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 38px;
    }
    > p {
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: 14px;
      color: #595959;
    }
    > img {
      vertical-align: middle;
    }
    .hljs {
      padding: 20px;
      border: 1px solid #D9D9D9;
      background-color: #FAFAFA;
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
      font-size: 12px;
      line-height: 1.8;
      border-radius: 3px;
      -webkit-font-smoothing: none;
    }
    .table {
      width: 100%;
      margin-bottom: 50px;
      font-size: 14px;
      color: #595959;
      border-collapse: collapse;
      overflow: auto;
      th {
        padding: 10px;
        border: 1px solid #D9D9D9;
        background-color: #FAFAFA;
        text-align: left;
      }
      td {
        padding: 10px;
        border: 1px solid #D9D9D9;
        text-align: left;
      }
    }
    .v-row + .v-row {
      margin-top: 10px;
    }
  }
</style>