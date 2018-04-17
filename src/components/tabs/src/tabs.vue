<template>
  <div class="v-tabs" :class="placement">
    <div class="v-tabs--header">
      <div class="v-tabs--nav-wrapper">
        <div class="v-tabs--nav-scroll">
          <div class="v-tabs--nav">
            <tabs-bar :nav="nav"></tabs-bar>
            <slot name="nav"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="v-tabs--content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  import TabsBar from './tabs-bar';

  export default {
    name: 'Tabs',
    componentName: 'Tabs',
    components: {
      TabsBar,
    },
    provide() {
      return {
        tabs: this,
      };
    },
    props: {
      value: {},
      placement: {
        type: String,
        default: 'top',
      },
      defaultActive: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        nav: [],
        panels: [],
      };
    },
    methods: {
      addTabs(item) {
        const index = this.$slots.nav.filter(item => {
          return item.elm.nodeType === 1 && /\bv-tabs-nav\b/.test(item.elm.className);
        }).indexOf(item.$vnode);
        this.nav.splice(index, 0, item);
      },
      removeTabs(item) {
        const nav = this.nav;
        const index = nav.indexOf(item);
        if (index > -1) {
          nav.splice(index, 1);
        }
      },
      addPanels(item) {
        const index = this.$slots.content.filter(item => {
          return item.elm.nodeType === 1 && /\bv-tabs-panel\b/.test(item.elm.className);
        }).indexOf(item.$vnode);
        this.panels.splice(index, 0, item);
      },
      removePanels(item) {
        const panels = this.panels;
        const index = panels.indexOf(item);
        if (index > -1) {
          panels.splice(index, 1);
        }
      },
      handleClick(item) {
        const value = item.value || item.label;
        this.$emit('tab-click', value);
      },
    },
    mounted() {
      this.$on('tabs-item-click', this.handleClick);
    },
  };
</script>
