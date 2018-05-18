<template>
  <transition name="zoom-in-top" @after-leave="doDestroy">
    <ul
      class="v-select--menu"
      :class="[
        {
          ['v-select-menu--' + size]: size
        }
      ]"
      v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  import Popper from 'free-vui/src/utils/popper';

  export default {
    name: 'SelectMenu',
    componentName: 'SelectMenu',
    mixins: [Popper],
    inject: ['select'],
    data() {
      return {
        size: this.select.selectSize,
        appendToBody: this.select.appendToBody,
      };
    },
    watch: {
      'select.placement': {
        immediate: true,
        handler(val) {
          this.currentPlacement = val;
        },
      },
    },
    created() {
      this.$on('visible', (val) => {
        this.showPopper = val;
      });
    },
    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },
  };
</script>
