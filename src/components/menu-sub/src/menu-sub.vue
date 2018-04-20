<template>
  <li
    class="v-menu--sub"
    :class="[
      {
        ['active']: active,
        ['disabled']: disabled,
      }
    ]"
    aria-haspopup="true"
    aria-expanded="true"
    role="menuitem"
    @click="handleClick">
    <template>
      <div class="v-menu--sub-title" :style="style">
        <h4>
          <slot name="title"></slot>
        </h4>
      </div>
      <ul class="v-menu--sub-menu">
        <slot></slot>
      </ul>
    </template>
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'MenuSub',
    componentName: 'MenuSub',
    mixins: [Emitter],
    inject: ['menu'],
    props: {
      active: Boolean,
      disabled: Boolean,
    },
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
    methods: {
      handleClick() {
      },
    },
    created() {
      this.menu.addMenuSub(this);
    },
    beforeDestroy() {
      this.menu.removeMenuSub(this);
    },
  };
</script>
