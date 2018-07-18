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
    components: {
      TabsBar,
    },
    provide() {
      return {
        tabs: this,
      };
    },
    inheritAttrs: false,
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
      value: {
        handler(value) {
          this.updateActive(value);
        },
      },
    },
    mounted() {
      this.$on('tabs-item-click', this.handleItemClick);
      this.$on('tabs-item-remove', this.handleItemRemove);
      this.$watch('tabs', this.updateActive());
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
        if (value) {
          activeName = value;
        } else {
          const navs = this.navs;
          const nav = navs.find(tab => tab.name === this.defaultActive);
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
        this.$emit('tab-click', this, event);
      },
      setCurrent(navs, targetName) {
        navs.forEach((nav, index) => {
          if (nav.name === targetName) {
            this.$nextTick(() => {
              const nextNav = navs[index + 1] || navs[index - 1];
              if (nextNav) {
                if (nextNav.disabled) {
                  this.setCurrent(navs, nextNav.name);
                } else {
                  this.updateActive(nextNav.name);
                }
              }
            });
          }
        });
      },
      handleItemRemove(pane, event) {
        if (pane.disabled) return;
        event.stopPropagation();
        const navs = this.navs;
        let activeName = this.currentName;
        const targetName = pane.name;
        if (activeName === targetName) {
          this.setCurrent(navs, targetName);
        }
        this.$emit('tab-remove', pane.name, event);
      },
    },
  };
</script>
