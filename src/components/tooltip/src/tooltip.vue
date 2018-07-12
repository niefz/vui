<template>
  <div
    class="v-tooltip"
    @mouseenter="handleShowPopper"
    @mouseleave="handleClosePopper">
    <div
      ref="reference"
      role="reference"
      class="v-tooltip--reference">
      <slot></slot>
    </div>
    <transition :name="transition">
      <div
        ref="popper"
        role="tooltip"
        class="v-tooltip--popper"
        :class="[
          'v-tooltip--placement-' + placement,
          theme,
        ]"
        @mouseenter="handleShowPopper"
        @mouseleave="handleClosePopper"
        v-show="!disabled && showPopper">
        <div class="v-tooltip--content">
          <div class="v-tooltip--arrow"></div>
          <div class="v-tooltip--inner">
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Popper from 'free-vui/src/utils/popper';

  export default {
    name: 'Tooltip',
    mixins: [Popper],
    inheritAttrs: false,
    props: {
      transition: {
        type: String,
        default: 'fade-in-linear',
      },
      placement: {
        type: String,
        default: 'top',
      },
      theme: {
        type: String,
        default: 'dark',
      },
      content: {
        type: String,
        default: '',
      },
      openDelay: {
        type: Number,
        default: 300,
      },
      hideDelay: {
        type: Number,
        default: 300,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      popperOptions: {
        default() {
          return {
            boundariesPadding: 10,
            gpuAcceleration: false,
          };
        },
      },
    },
    data() {
      return {
        appendToBody: true,
      };
    },
    watch: {
      content () {
        this.updatePopper();
      },
    },
    methods: {
      handleShowPopper() {
        if (this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.showPopper = true;
        }, this.openDelay);
      },
      handleClosePopper() {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = setTimeout(() => {
            this.showPopper = false;
          }, this.hideDelay);
        }
      },
    },
  };
</script>
