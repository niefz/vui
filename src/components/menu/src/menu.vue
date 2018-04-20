<template>
  <ul
    class="v-menu"
    :class="[
      'v-menu--' + mode,
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
        default: ''
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
      defaultActive() {
        this.updateActive();
      },
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
    mounted() {
      this.$on('menu-item-click', this.handleItemClick);
      this.$watch('items', this.updateActive);
    },
  };
</script>
