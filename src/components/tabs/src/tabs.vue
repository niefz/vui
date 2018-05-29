<template>
  <div
    class="v-tabs"
    :class="[
      'v-tabs--' + theme,
      'v-tabs--' + size,
      'v-tabs--placement-' + placement,
    ]">
    <div class="v-tabs--header">
      <div class="v-tabs--header-extra" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
      <div class="v-tabs--nav-wrapper">
        <div class="v-tabs--nav-scroll">
          <div class="v-tabs--nav">
            <TabsBar :navs="navs" v-if="theme === 'line'"></TabsBar>
            <slot name="nav"></slot>
          </div>
        </div>
      </div>
    </div>
    <div class="v-tabs--body">
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
      theme: {
        type: String,
        default: 'line',
      },
      size: {
        type: String,
        default: 'small',
      },
      placement: {
        type: String,
        default: 'top',
      },
      defaultActive: {
        type: String,
        default: '',
      },
      closable: Boolean,
      disabled: Boolean,
    },
    data() {
      return {
        navs: [],
        panels: [],
        currentName: this.value || this.defaultActive,
      };
    },
    watch: {
      value(value) {
        this.updateActive(value);
      },
    },
    methods: {
      addNavs(item) {
        this.navs.push(item);
      },
      removeNavs(item) {
        const navs = this.navs;
        const index = navs.indexOf(item);
        if (index > -1) {
          navs.splice(index, 1);
        }
      },
      addPanels(item) {
        this.panels.push(item);
      },
      removePanels(item) {
        const panels = this.panels;
        const index = panels.indexOf(item);
        if (index > -1) {
          panels.splice(index, 1);
        }
      },
      updateActive(value) {
        let activeName;
        const navs = this.navs;
        const nav = navs.find(tab => tab.name === this.defaultActive);
        if (value) {
          activeName = value;
        } else {
          if (nav) {
            activeName = nav.name;
          } else {
            activeName = navs[0].name;
          }
        }
        this.currentName = activeName;
        this.$emit('input', activeName);
      },
      handleItemClick(item, event) {
        const activeName = item.name;
        this.updateActive(activeName);
        this.$emit('tab-click', activeName, event);
      },
      handleItemRemove(pane, event) {
        if (pane.disabled) return;
        this.$emit('tab-remove', pane.name, event);
      },
    },
    mounted() {
      this.$on('tabs-item-remove', this.handleItemRemove);
      this.$on('tabs-item-click', this.handleItemClick);
      this.$watch('tabs', this.updateActive());
    },
  };
</script>
