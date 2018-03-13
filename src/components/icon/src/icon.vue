<template>
  <i class="v-icon" :class="icon"></i>
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
  };
</script>
