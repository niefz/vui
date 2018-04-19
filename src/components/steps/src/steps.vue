<template>
  <div
    class="v-steps"
    :class="[
      'v-steps--' + mode,
    ]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Steps',
    componentName: 'Steps',
    provide() {
      return {
        steps: this,
      };
    },
    props: {
      mode: {
        type: String,
        default: 'horizontal',
      },
      status: {
        type: String,
        default: '',
      },
      current: {
        type: Number,
        default: 1,
      },
    },
    data() {
      return {
        steps: [],
      };
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
      updateChildProps() {
        this.$children.forEach((child, index) => {
          child.index = index + 1;
        });
      },
    },
    mounted() {
      this.$watch('steps', this.updateChildProps());
    },
  };
</script>
