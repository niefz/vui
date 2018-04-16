<template>
  <ul
    class="v-menu"
    :class="[
      'v-menu-' + mode,
    ]"
    role="menu">
    <slot></slot>
  </ul>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'Menu',
    componentName: 'Menu',
    mixins: [Emitter],
    provide() {
      return {
        menu: this,
      };
    },
    props: {
      mode: {
        type: String,
        default: 'vertical',
      },
      indent: {
        type: Number,
        default: 20,
      },
      defaultActive: {
        type: String,
        default: ''
      },
    },
    data() {
      return {
        active: this.defaultActive,
      };
    },
    methods: {
      updateActiveIndex() {
        const item = this.items[this.defaultActive];
        if (item) {
          this.active = item.index;
        } else {
          this.active = null;
        }
      },
      handleItemClick(item) {
        this.active = item.index;
      },
    },
    mounted() {
      this.$on('menu-item-click', this.handleItemClick);
    },
  };
</script>
