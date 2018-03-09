<template>
  <div class="wrapper">
    <header></header>
    <section class="section">
      <div class="v-row">
        <div class="side-nav v-col-xs-24 v-col-sm-24 v-col-md-24 v-col-lg-6 v-col-xl-5 v-col-xxl-4">
          <div class="side-nav__container">
            <ul
              class="v-menu"
              :class="`v-menu-${mode}`"
              role="menu">
              <li
                class="v-menu__item"
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
                      class="v-submenu__title"
                      aria-expanded="true"
                      aria-haspopup="true">
                      <h4>{{ nav.name }}</h4>
                      <i class="v-submenu__title-arrow"></i>
                    </div>
                    <ul
                      role="menu">
                      <li
                        class="v-submenu__item"
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
                      class="v-submenu__title"
                      aria-expanded="true"
                      aria-haspopup="true">
                      <h4>{{ nav.name }}</h4>
                      <i class="v-submenu__title-arrow"></i>
                    </div>
                    <ul
                      role="menu">
                      <li
                        class="v-submenu-group"
                        :key="index"
                        v-for="(group, index) in nav.groups">
                        <div
                          class="v-submenu-group__title">
                          {{ group.groupName }}
                        </div>
                        <ul
                          class="v-submenu-group__menu">
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
        <div class="v-col-xs-24 v-col-sm-24 v-col-md-24 v-col-lg-18 v-col-xl-19 v-col-xxl-20">
          <router-view></router-view>
        </div>
      </div>
    </section>
    <footer></footer>
  </div>
</template>
<script>
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

  .side-nav {
    border-right: 1px solid #E8E8E8;
    .v-menu {
      width: calc(100% + 1px);
    }
  }

  .markdown {
    padding: 0 160px 0 60px;
    h1 {
      margin-top: 10px;
      margin-bottom: 20px;
      font-size: 28px;
      line-height: 38px;
      .subtitle {
        margin-left: 10px
      }
    }
    p {
      font-size: 14px;
      line-height: 1.5em;
      color: #5E6D82;
    }
    h2 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 20px;
      line-height: 38px;
    }
    .example {
      margin-bottom: 20px;
      border: 1px solid #E8E8E8;
      border-radius: 3px;
      transition: all .2s ease-in-out;
      &-demo, &-code {
        padding: 20px;
      }
    }
  }
</style>