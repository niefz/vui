<template>
  <i class="v-icon" :class="icon"></i>
</template>
<script>
  export default {
    name: 'VIcon',
    componentName: 'VIcon',
    props: {
      icon: {
        type: String,
        default: '',
      },
    },
  };
</script>
