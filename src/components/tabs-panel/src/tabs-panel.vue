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
    inject: ['tabs'],
    inheritAttrs: false,
    props: {
      name: {
        type: String,
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
