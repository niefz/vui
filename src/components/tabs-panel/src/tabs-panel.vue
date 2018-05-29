<template>
  <div
    class="v-tabs--panel"
    v-show="isActive"
    role="tabpanel"
    :aria-hidden="!isActive">
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
      isActive() {
        return this.tabs.currentName === this.name;
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
