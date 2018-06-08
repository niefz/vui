<template>
  <div
    :class="[
      'v-divider--' + mode,
      {
        ['v-divider--width-text']: $slots.default,
        ['v-divider--dashed']: dashed,
      },
      align,
    ]">
    <span class="v-divider--inner-text" v-if="$slots.default"><slot></slot></span>
  </div>
</template>
<script>
  export default {
    name: 'Divider',
    componentName: 'Divider',
    inheritAttrs: false,
    props: {
      mode: {
        type: String,
        default: 'horizontal',
      },
      dashed: {
        type: Boolean,
        default: false,
      },
      align: {
        type: String,
        default: 'center',
      },
    },
  };
</script>
