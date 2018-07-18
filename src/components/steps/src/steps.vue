<template>
  <div
    class="v-steps"
    :class="[
      'v-steps--' + mode,
    ]">
    <div class="v-steps--nav">
      <slot></slot>
    </div>
    <div class="v-steps--content" v-if="$slots.content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Steps',
    provide() {
      return {
        steps: this,
      };
    },
    inheritAttrs: false,
    props: {
      mode: {
        type: String,
        default: 'horizontal',
      },
      current: {
        type: Number,
        default: 1,
      },
      status: {
        type: String,
      },
    },
    data() {
      return {
        steps: [],
        panels: [],
      };
    },
    mounted() {
      this.$watch('steps', this.updateChildProps());
    },
    methods: {
      addSteps(item) {
        this.steps.push(item);
      },
      removeSteps(item) {
        const steps = this.steps;
        const index = steps.indexOf(item);
        if (index > -1) {
          steps.splice(index, 1);
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
      updateChildProps() {
        this.$children.forEach((child, index) => {
          if (child.$options.name === 'StepsItem') {
            child.index = index + 1;
          }
        });
      },
    },
  };
</script>
