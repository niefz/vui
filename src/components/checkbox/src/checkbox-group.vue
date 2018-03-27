<template>
  <div
    class="v-checkbox-group"
    :class="[
      'v-checkbox-group__' + mode,
    ]">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'CheckboxGroup',
    componentName: 'CheckboxGroup',
    props: {
      mode: {
        type: String,
        default: 'horizontal',
      },
    },
  };
</script>
