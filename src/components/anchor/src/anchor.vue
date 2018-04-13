<template>
  <div
    class="v-anchor"
    :style="style">
    <div class="v-anchor--ink" v-if="showInk"></div>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Anchor',
    componentName: 'Anchor',
    props: {
      affix: {
        type: Boolean,
        default: true,
      },
      showInk: {
        type: Boolean,
        default: false,
      },
      top: Number,
      right: Number,
      bottom: Number,
      left: Number,
    },
    computed: {
      style() {
        return {
          position: this.affix ? 'fixed' : 'relative',
          top: this.top ? `${this.top}px` : !this.bottom && '16px',
          right: this.right ? `${this.right}px` : !this.left && '16px',
          bottom: this.bottom && `${this.bottom}px`,
          left: this.left && `${this.left}px`,
        };
      },
    },
  };
</script>
