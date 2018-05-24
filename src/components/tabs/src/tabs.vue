<template>
  <div class="v-tabs" :class="placement">
    <div class="v-tabs--header">
      <div class="v-tabs--header-extra" v-if="$slots.extra">
        <slot name="extra"></slot>
      </div>
      <div class="v-tabs--nav-wrapper">
        <div class="v-tabs--nav-scroll">
          <div class="v-tabs--nav">
            <TabsBar :nav="tabs"></TabsBar>
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
      placement: {
        type: String,
        default: 'top',
      },
      defaultActive: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        tabs: [],
        panels: [],
        active: this.defaultActive,
      };
    },
    methods: {
      addTabs(item) {
        this.tabs.push(item);
      },
      removeTabs(item) {
        const tabs = this.tabs;
        const index = tabs.indexOf(item);
        if (index > -1) {
          tabs.splice(index, 1);
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
      updateActive() {
        const tabs = this.tabs;
        const tab = tabs.find(tab => tab.value === this.defaultActive);
        if (tab) {
          this.active = tab.value;
        } else {
          this.active = tabs[0].value;
        }
      },
      handleItemClick(item, event) {
        const value = item.value;
        this.active = value;
        this.$emit('tab-click', value, event);
      },
    },
    mounted() {
      this.$on('tabs-item-click', this.handleItemClick);
      this.$watch('tabs', this.updateActive());
    },
  };
</script>
