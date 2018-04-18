<template>
  <div
    class="v-anchor"
    :style="style">
    <div class="v-anchor--ink" v-if="showInk">
      <v-anchor-bar :links="links"></v-anchor-bar>
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
      VAnchorBar: AnchorBar,
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
      defaultActive: {
        type: String,
        default: '',
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
    methods: {
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
    mounted() {
      this.$on('anchor-item-click', this.handleItemClick);
      this.$watch('links', this.updateActive());
    },
  };
</script>
