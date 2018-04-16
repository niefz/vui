<template>
  <div class="wrapper">
    <header></header>
    <div class="v-scrollbar">
      <div class="v-scrollbar--wrap">
        <div class="side-nav">
          <div class="side-nav--container">
            <v-menu :default-active="defaultActive">
              <template v-for="(nav, index) in navigations">
                <v-menu-item :index="nav.name" v-if="nav.path">
                  <router-link :to="nav.path">{{ nav.name }}</router-link>
                </v-menu-item>
                <v-menu-sub :index="nav.name" v-else>
                  <template slot="title">
                    <h4>{{ nav.name }}</h4>
                    <i class="v-menu--sub-title-arrow"></i>
                  </template>
                  <template v-if="nav.child">
                    <v-menu-item
                      :index="child.name"
                      :key="index"
                      v-for="(child, index) in nav.child">
                      <router-link :to="child.path">{{ child.name }}</router-link>
                    </v-menu-item>
                  </template>
                  <template v-if="nav.groups">
                    <v-menu-item-group
                      :index="group.name"
                      :key="index"
                      v-for="(group, index) in nav.groups">
                      <template slot="title">
                        <h4>{{ group.name }}</h4>
                        <i class="v-submenu--title-arrow"></i>
                      </template>
                      <v-menu-item
                        :index="child.name"
                        :key="index"
                        v-for="(child, index) in group.child">
                        <router-link :to="child.path">{{ child.name }}</router-link>
                      </v-menu-item>
                    </v-menu-item-group>
                  </template>
                </v-menu-sub>
              </template>
            </v-menu>
          </div>
        </div>
        <div class="container">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <footer></footer>
  </div>
</template>
<script>
  import 'highlight.js/styles/color-brewer.css';
  import navigations from './nav.json';
  import Menu from '@/components/menu';
  import MenuSub from '@/components/menu-sub';
  import MenuItem from '@/components/menu-item';
  import MenuItemGroup from '@/components/menu-item-group';

  export default {
    components: {
      VMenu: Menu,
      VMenuSub: MenuSub,
      VMenuItem: MenuItem,
      VMenuItemGroup: MenuItemGroup,
    },
    data() {
      return {
        navigations,
        defaultActive: '',
      };
    },
    watch: {
      $route(val) {
        this.defaultActive = val.path;
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

  .v-scrollbar {
    position: relative;
    height: 100%;
    overflow: hidden;
    &--wrap {
      height: 100%;
      overflow-y: scroll;
    }
  }

  .side-nav {
    position: fixed;
    top: 0;
    bottom: 0;
    width: 320px;
    transition: padding-top .3s;
    &--container {
      height: 100%;
      border-right: 1px solid #E8E8E8;
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

  .container {
    padding-left: 320px;
  }

  .article {
    padding: 0 160px 0 60px;
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