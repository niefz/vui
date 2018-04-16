<template>
  <li class="v-menu--item-group">
    <div class="v-menu--item-group-title" :style="{paddingLeft: paddingLeft + 'px'}">
      <slot name="title"></slot>
    </div>
    <ul class="v-menu--item-group-menu">
      <slot></slot>
    </ul>
  </li>
</template>
<script>
  export default {
    name: 'MenuItemGroup',
    componentName: 'MenuItemGroup',
    inject: ['menu'],
    computed: {
      paddingLeft() {
        let indent = this.menu.indent;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'Menu') {
          if (parent.$options.componentName === 'MenuSub') {
            indent += 20;
          }
          parent = parent.$parent;
        }
        return indent;
      },
    },
    methods: {},
  };
</script>
