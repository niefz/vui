<template>
  <div class="wrapper">
    <header></header>
    <div class="v-scrollbar">
      <div class="v-scrollbar--wrap">
        <div class="side-nav">
          <div class="side-nav--container">
            <ul
              class="v-menu"
              :class="`v-menu-${mode}`"
              role="menu">
              <li
                class="v-menu--item"
                role="menuitem"
                aria-selected="false"
                :key="index"
                v-for="(nav, index) in navigations">
                <router-link
                  :to="nav.path"
                  v-if="nav.path">
                  {{ nav.name }}
                </router-link>
                <div
                  class="v-submenu"
                  v-else>
                  <template v-if="nav.child">
                    <div
                      class="v-submenu--title"
                      aria-expanded="true"
                      aria-haspopup="true">
                      <h4>{{ nav.name }}</h4>
                      <i class="v-submenu--title-arrow"></i>
                    </div>
                    <ul
                      role="menu">
                      <li
                        class="v-submenu--item"
                        role="menuitem"
                        aria-selected="false"
                        :key="index"
                        v-for="(child, index) in nav.child">
                        <router-link :to="child.path">{{ child.title }}</router-link>
                      </li>
                    </ul>
                  </template>
                  <template v-if="nav.groups">
                    <div
                      class="v-submenu--title"
                      aria-expanded="true"
                      aria-haspopup="true">
                      <h4>{{ nav.name }}</h4>
                      <i class="v-submenu--title-arrow"></i>
                    </div>
                    <ul
                      role="menu">
                      <li
                        class="v-submenu-group"
                        :key="index"
                        v-for="(group, index) in nav.groups">
                        <div
                          class="v-submenu-group--title">
                          {{ group.groupName }}
                        </div>
                        <ul
                          class="v-submenu-group--menu">
                          <li
                            class="v-group-item"
                            role="menuitem"
                            aria-selected="false"
                            :key="index"
                            v-for="(child, index) in group.list">
                            <router-link :to="child.path">
                              {{ child.title }}
                            </router-link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </template>
                </div>
              </li>
            </ul>
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

  export default {
    data() {
      return {
        navigations,
      };
    },
    props: {
      mode: {
        type: String,
        default: 'vertical',
      },
    },
    watch: {
      $route() {
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
    h1 {
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 38px;
    }
    h2 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 38px;
    }
    p {
      margin-top: 1em;
      margin-bottom: 1em;
      font-size: 14px;
      color: #595959;
    }
    img {
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