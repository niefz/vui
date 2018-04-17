<template>
  <div
    class="v-tabs--nav-panel"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'TabsPanel',
    componentName: 'TabsPanel',
    inject: ['tabs'],
    props: {
      name: {
        type: String,
        default: '',
      },
    },
    computed: {
      active() {
        return this.tabs.value === this.name;
      },
    },
    mounted() {
      this.tabs.addPanels(this);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.tabs.removePanels(this);
    },
  };
</script>
