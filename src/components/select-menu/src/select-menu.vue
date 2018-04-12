<template>
  <transition name="zoom-in-top">
    <ul class="v-select--menu" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  export default {
    name: 'SelectMenu',
    componentName: 'SelectMenu',
    data() {
      return {
        showPopper: false,
      };
    },
    created() {
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },
  };
</script>
