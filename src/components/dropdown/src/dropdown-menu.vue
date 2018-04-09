<template>
  <transition name="v-zoom-in-top" @after-leave="doDestroy">
    <ul
      class="v-dropdown-menu"
      :class="[
        'v-dropdown-menu--' + size
      ]"
      v-show="showPopper">
      <slot></slot>
    </ul>
  </transition>
</template>
<script>
  import Popper from '@/utils/popper';

  export default {
    name: 'DropdownMenu',
    componentName: 'DropdownMenu',
    mixins: [Popper],
    inject: ['dropdown'],
    props: {
      visibleArrow: {
        type: Boolean,
        default: true
      },
      arrowOffset: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        size: this.dropdown.dropdownSize,
      };
    },
    watch: {
      'dropdown.placement': {
        immediate: true,
        handler(val) {
          this.currentPlacement = val;
        },
      },
    },
    created() {
      this.$on('updatePopper', () => {
        if (this.showPopper) this.updatePopper();
      });
      this.$on('visible', val => {
        this.showPopper = val;
      });
    },
    mounted() {
      this.$parent.popperElement = this.popperElement = this.$el;
      this.referenceElement = this.$parent.$el;
    },
  }
</script>