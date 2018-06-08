<template>
  <i :class="icon" :style="{ fontSize: `${fontSize}px` }" @click="handleClick"></i>
</template>
<script>
  export default {
    name: 'Icon',
    componentName: 'Icon',
    inheritAttrs: false,
    props: {
      icon: {
        type: String,
        default: '',
      },
      fontSize: {
        type: Number,
        default: 12,
      },
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      },
    },
  };
</script>
