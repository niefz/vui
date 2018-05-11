<template>
  <transition name="zoom-in-top" @after-leave="doDestroy">
    <ul
      class="v-dropdown-menu"
      :class="[
        {
          ['v-dropdown-menu--' + size]: size
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
    name: 'DropdownMenu',
    componentName: 'DropdownMenu',
    mixins: [Popper],
    inject: ['dropdown'],
    props: {
      appendToBody: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        size: this.dropdown.dropdownSize,
      };
    },
    created() {
      this.$on('updatePopper', () => {
        if (this.showPopper) this.updatePopper();
      });
      this.$on('visible', (val) => {
        this.showPopper = val;
      });
    },
    mounted() {
      this.$parent.popperElm = this.popperElm = this.$el;
      this.referenceElm = this.$parent.$el;
    },
    watch: {
      'dropdown.placement': {
        immediate: true,
        handler(val) {
          this.currentPlacement = val;
        },
      },
    },
  };
</script>
