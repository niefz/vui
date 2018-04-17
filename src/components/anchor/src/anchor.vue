<template>
  <div
    class="v-anchor"
    :style="style">
    <div class="v-anchor--ink" v-if="showInk">
      <anchor-bar :links="links"></anchor-bar>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import AnchorBar from './anchor-bar';

  export default {
    name: 'Anchor',
    componentName: 'Anchor',
    components: {
      AnchorBar,
    },
    provide() {
      return {
        anchor: this,
      };
    },
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
    data() {
      return {
        links: [],
        active: this.defaultActive,
      };
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
    watch: {
      defaultActive() {
        this.updateActive();
      },
    },
    methods: {
      addLinks(item) {
        const index = this.$slots.default.filter(item => {
          return item.elm.nodeType === 1 && /\bv-anchor-link\b/.test(item.elm.className);
        }).indexOf(item.$vnode);
        this.links.splice(index, 0, item);
      },
      removeLinks(item) {
        const links = this.links;
        const index = links.indexOf(item);
        if (index > -1) {
          links.splice(index, 1);
        }
      },
      updateActive() {
        const link = this.links.filter(item => item.title === this.defaultActive)[0];
        if (link) {
          this.active = link.title;
        } else {
          this.active = this.links[0].title;
        }
      },
      handleLinkClick(item) {
        this.active = item.title;
      },
    },
    mounted() {
      this.$on('anchor-link-click', this.handleLinkClick);
      this.$watch('links', this.updateActive);
    },
  };
</script>
