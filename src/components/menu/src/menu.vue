<template>
  <ul
    class="v-menu"
    :class="[
      'v-menu--' + mode,
      'v-menu--' + theme,
    ]"
    role="menu">
    <slot></slot>
  </ul>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'Menu',
    provide() {
      return {
        menu: this,
      };
    },
    mixins: [Emitter],
    inheritAttrs: false,
    props: {
      mode: {
        type: String,
        default: 'vertical',
      },
      theme: {
        type: String,
        default: 'light',
      },
      height: {
        type: Number,
        default: 40,
      },
      indent: {
        type: Number,
        default: 20,
      },
      defaultActive: {
        type: String,
      },
      defaultOpens: {
        type: String,
      },
    },
    data() {
      return {
        active: this.defaultActive,
        items: {},
        submenus: {},
      };
    },
    watch: {
      defaultActive: {
        handler() {
          this.updateActive();
        },
      },
    },
    mounted() {
      this.$on('menu-item-click', this.handleItemClick);
      this.$watch('items', this.updateActive);
    },
    methods: {
      addMenuItem(item) {
        this.$set(this.items, item.index, item);
      },
      removeMenuItem(item) {
        delete this.items[item.index];
      },
      addMenuSub(item) {
        this.$set(this.submenus, item.index, item);
      },
      removeMenuSub(item) {
        delete this.submenus[item.index];
      },
      updateActive() {
        const item = this.items[this.defaultActive];
        if (item) {
          this.active = item.index;
        }
      },
      handleItemClick(item) {
        this.active = item.index;
      },
    },
  };
</script>
