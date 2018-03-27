<template>
  <div
    class="v-checkbox-group"
    :class="[
      'v-checkbox-group__' + mode,
    ]"
    role="group"
    aria-label="checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'CheckboxGroup',
    componentName: 'CheckboxGroup',
    mixins: [Emitter],
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
      disabled: Boolean,
    },
    computed: {
      checkboxGroupSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
  };
</script>
