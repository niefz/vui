<template>
  <i class="v-icon" :class="icon" @click="handleClick"></i>
</template>
<script>
  export default {
    name: 'Icon',
    componentName: 'Icon',
    props: {
      icon: {
        type: String,
        default: '',
      },
    },
    methods: {
      handleClick(event) {
        this.$emit('click', event);
      },
    },
  };
</script>
