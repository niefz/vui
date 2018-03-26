<template>
  <div
    class="v-btn-group"
    :class="[
      'v-btn-group__' + mode,
    ]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'ButtonGroup',
    componentName: 'ButtonGroup',
    props: {
      mode: {
        type: String,
        default: 'horizontal',
      },
    },
  };
</script>
