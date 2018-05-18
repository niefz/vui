<template>
  <div
    class="v-steps--panel"
    v-show="active"
    role="tabpanel"
    :aria-hidden="!active">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'StepsPanel',
    componentName: 'StepsPanel',
    inject: ['steps'],
    props: {
      name: [String, Number],
    },
    computed: {
      active() {
        return this.steps.current === Number(this.name);
      },
    },
    mounted() {
      this.steps.addPanels(this);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.steps.removePanels(this);
    },
  };
</script>
