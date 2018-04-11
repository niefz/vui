<template>
  <transition name="v-zoom-in-top">
    <ul class="v-dropdown-menu" v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  export default {
    name: 'DropdownMenu',
    componentName: 'DropdownMenu',
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
