<template>
  <li class="v-menu--item-group">
    <div class="v-menu--item-group-title" :style="style">
      <h4>
        <slot name="title"></slot>
      </h4>
    </div>
    <ul class="v-menu--item-group-menu">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'MenuItemGroup',
    inject: ['menu'],
    inheritAttrs: false,
    computed: {
      style() {
        const height = this.menu.height;
        let style = {};
        let indent = this.menu.indent;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'Menu') {
          if (parent.$options.componentName === 'MenuSub') {
            indent += 20;
          }
          parent = parent.$parent;
        }
        style.paddingLeft = `${indent}px`;
        style.lineHeight = `${height}px`;
        return style;
      },
    },
    methods: {},
  };
</script>
