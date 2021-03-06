<template>
  <div
    class="v-affix"
    :class="[
      {
        ['fixed']: affix || isAffix,
      }
    ]"
    :style="style">
    <slot></slot>
  </div>
</template>
<script>
  import { on, off, getScroll, getOffset } from 'free-vui/src/utils/dom';

  export default {
    name: 'Affix',
    inheritAttrs: false,
    props: {
      affix: {
        type: Boolean,
      },
      top: {
        type: Number,
        default: 0
      },
      right: {
        type: Number,
      },
      bottom: {
        type: Number,
      },
      left: {
        type: Number,
      },
    },
    data () {
      return {
        isAffix: false,
        style: {},
      };
    },
    computed: {
      offsetType () {
        let type = 'top';
        if (this.bottom >= 0) {
          type = 'bottom';
        }
        return type;
      },
    },
    mounted () {
      this.elOffset = getOffset(this.$el);
      if (this.affix) this.handleScroll();
      on(window, 'scroll', this.handleScroll);
      on(window, 'resize', this.handleScroll);
    },
    beforeDestroy () {
      off(window, 'scroll', this.handleScroll);
      off(window, 'resize', this.handleScroll);
    },
    methods: {
      handleScroll () {
        const elOffset = this.elOffset;
        const affix = this.isAffix;
        const top = this.top;
        const right = this.right;
        const bottom = this.bottom;
        const left = this.left;
        const el = this.$el;
        const elWidth = el.offsetWidth;
        const elHeight = el.offsetHeight;
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const scrollTop = getScroll(window, true);
        if (this.affix) {
          this.style = {
            top: bottom ? `${windowHeight - bottom - elHeight}px` : `${top}px`,
            left: right ? `${windowWidth - right - elWidth}px` : `${left}px` || `${elOffset.left}px`,
          };
        } else {
          if (this.offsetType == 'top') {
            // Fixed Top
            if (elOffset.top - top < scrollTop && !affix) {
              this.isAffix = true;
              this.style = {
                top: `${top}px`,
                left: right ? `${windowWidth - right - elWidth}px` : `${left}px` || `${elOffset.left}px`,
              };
              this.$emit('change', this.isAffix);
            } else if (elOffset.top - top > scrollTop && affix) {
              this.isAffix = false;
              this.style = {};
              this.$emit('change', this.isAffix);
            }
          } else if (this.offsetType == 'bottom') {
            // Fixed Bottom
            if (elOffset.top + bottom + elHeight > scrollTop + windowHeight && !affix) {
              this.isAffix = true;
              this.style = {
                bottom: `${bottom}px`,
                left: `${elOffset.left}px`,
              };
              this.$emit('change', this.isAffix);
            } else if (elOffset.top + bottom + elHeight < scrollTop + windowHeight && affix) {
              this.isAffix = false;
              this.style = {};
              this.$emit('change', this.isAffix);
            }
          }
        }
      },
    },
  };
</script>