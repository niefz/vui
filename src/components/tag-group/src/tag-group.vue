<template>
  <div class="v-tag-group">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'TagGroup',
    inheritAttrs: false,
    props: {
      value: [String, Array],
      multiple: Boolean,
    },
  };
</script>
