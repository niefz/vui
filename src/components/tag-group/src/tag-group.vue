<template>
  <div class="v-tag-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'TagGroup',
    componentName: 'TagGroup',
    props: {
      value: [String, Array],
      multiple: Boolean,
    },
  };
</script>
