<template>
  <div
    class="v-checkbox-group"
    :class="[
      'v-checkbox-group--' + mode,
    ]"
    role="group"
    aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'CheckboxGroup',
    componentName: 'CheckboxGroup',
    props: {
      value: {
        type: Array,
        default: () => [],
      },
      min: Number,
      max: Number,
      mode: {
        type: String,
        default: 'horizontal',
      },
      size: {
        type: String,
        default: 'small',
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      checkboxGroupSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
  };
</script>
