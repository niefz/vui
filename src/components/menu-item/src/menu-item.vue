<template>
  <li
    class="v-menu--item"
    :class="[
      {
        ['active']: active,
        ['disabled']: disabled,
      }
    ]"
    :style="{paddingLeft: paddingLeft + 'px'}"
    role="menuitem"
    aria-selected="false"
    @click="handleClick">
    <template>
      <slot></slot>
    </template>
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'MenuItem',
    componentName: 'MenuItem',
    mixins: [Emitter],
    inject: ['menu'],
    props: {
      index: String,
      disabled: Boolean,
    },
    computed: {
      active() {
        return this.index === this.menu.active;
      },
      paddingLeft() {
        let indent = this.menu.indent;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'Menu') {
          if (parent.$options.componentName === 'MenuSub') {
            indent += 20;
          } else if (parent.$options.componentName === 'MenuItemGroup') {
            indent += 20;
          }
          parent = parent.$parent;
        }
        return indent;
      },
    },
    methods: {
      handleClick() {
        if (this.disabled)  return;
        this.dispatch('Menu', 'menu-item-click', [this]);
        this.$emit('click', this);
      },
    },
    created() {
      this.menu.addMenuItem(this);
    },
    beforeDestroy() {
      this.menu.removeMenuItem(this);
    }
  };
</script>
