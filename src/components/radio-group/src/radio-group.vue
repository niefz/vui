<template>
  <div
    class="v-radio-group"
    :class="[
      'v-radio-group--' + mode,
    ]"
    role="radiogroup">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'RadioGroup',
    componentName: 'RadioGroup',
    inheritAttrs: false,
    props: {
      value: {},
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
      radioGroupSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
  };
</script>
