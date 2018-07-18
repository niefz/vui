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
      value: {
        type: [String, Array],
      },
      multiple: {
        type: Boolean,
      },
    },
  };
</script>
