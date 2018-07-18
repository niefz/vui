<template>
  <div
    role="group"
    class="v-checkbox-group"
    :class="[
      'v-checkbox-group--' + mode,
    ]"
    aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'CheckboxGroup',
    inheritAttrs: false,
    props: {
      value: {
        type: Array,
        default: () => [],
      },
      size: {
        type: String,
        default: 'small',
      },
      min: {
        type: Number,
      },
      max: {
        type: Number,
      },
      mode: {
        type: String,
        default: 'horizontal',
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
