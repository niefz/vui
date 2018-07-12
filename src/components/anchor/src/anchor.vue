<template>
  <div
    class="v-anchor"
    :class="[
      {
        ['fixed']: affix || isAffix,
      }
    ]"
    :style="style">
    <div class="v-anchor--ink" v-if="showInk">
      <AnchorBar :links="links"></AnchorBar>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import { on, off, getScroll, getOffset } from 'free-vui/src/utils/dom';
  import AnchorBar from './anchor-bar';

  export default {
    name: 'Anchor',
    provide() {
      return {
        anchor: this,
      };
    },
    components: {
      AnchorBar,
    },
    inheritAttrs: false,
    props: {
      defaultActive: {
        type: String,
        default: '',
      },
      affix: Boolean,
      showInk: Boolean,
      top: {
        type: Number,
        default: 0
      },
      right: Number,
      bottom: Number,
      left: Number,
    },
    data() {
      return {
        active: this.defaultActive,
        isAffix: false,
        links: [],
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
    mounted() {
      this.$on('anchor-item-click', this.handleItemClick);
      this.$watch('links', this.updateActive());
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
      addLinks(item) {
        this.links.push(item);
      },
      removeLinks(item) {
        const links = this.links;
        const index = links.indexOf(item);
        if (index > -1) {
          links.splice(index, 1);
        }
      },
      updateActive() {
        const link = this.links.find(link => link.href === this.defaultActive);
        if (link) {
          this.active = link.href;
        }
      },
      handleItemClick(item) {
        this.active = item.href;
      },
    },
  };
</script>
