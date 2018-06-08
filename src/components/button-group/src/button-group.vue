<template>
  <div
    class="v-btn-group"
    :class="[
      'v-btn-group--' + mode,
    ]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ButtonGroup',
    componentName: 'ButtonGroup',
    inheritAttrs: false,
    props: {
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
  };
</script>
