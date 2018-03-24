<template>
  <div
    :class="[
      'v-divider__' + mode,
      {
        ['v-divider__width-text']: $slots.default,
        ['v-divider__dashed']: dashed,
      },
      align,
    ]">
    <span class="v-divider__inner-text" v-if="$slots.default"><slot></slot></span>
  </div>
</template>
<script>
  export default {
    name: 'Divider',
    componentName: 'Divider',
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
