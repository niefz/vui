<template>
  <div class="v-tag-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'TagGroup',
    componentName: 'TagGroup',
    model: {
      prop: 'value',
    },
    props: {
      value: [String, Array],
      multiple: {
        type: Boolean,
        default: false,
      },
    },
  };
</script>
