<template>
  <div class="wrapper">
    <header></header>
    <section class="section">
      <div class="v-row">
        <div class="v-col-xs-24 v-col-sm-24 v-col-md-24 v-col-lg-6 v-col-xl-5 v-col-xxl-4">
          <ul
            class="v-menu"
            :class="`v-menu-${mode}`"
            role="menu">
            <li
              class="v-menu__item"
              role="menuitem"
              aria-selected="false"
              :key="index"
              v-for="(nav, index) in navigations"
              v-if="nav.path">
              <router-link :to="nav.path">{{ nav.name }}</router-link>
            </li>
            <li
              class="v-submenu"
              role="menuitem"
              aria-selected="false"
              :key="index"
              v-for="(nav, index) in navigations"
              v-if="nav.groups">
              <div
                class="v-submenu__title"
                aria-expanded="true"
                aria-haspopup="true">
                <h4>{{ nav.name }}</h4>
                <i class="v-menu__submenu-arrow"></i>
              </div>
              <ul
                class="v-submenu__menu"
                role="menu">
                <li
                  class="v-submenu-group"
                  :key="index"
                  v-for="(sub, index) in nav.groups">
                  <div
                    class="v-submenu-group__title"
                    :title="sub.groupName">
                    {{ sub.groupName }}
                  </div>
                  <ul
                    class="v-submenu-group__menu">
                    <li
                      class="v-group-item"
                      role="menuitem"
                      aria-selected="false"
                      :key="index"
                      v-for="(child, index) in sub.list">
                      <router-link :to="child.path">
                        {{ child.title }}
                      </router-link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="v-col-xs-24 v-col-sm-24 v-col-md-24 v-col-lg-18 v-col-xl-19 v-col-xxl-20">
          <article ref="article" class="markdown">
            <router-view></router-view>
          </article>
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
<style lang="sass">
  @import "../src/styles/index.scss";
</style>