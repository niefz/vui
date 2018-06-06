<template>
  <router-link
    tag="li"
    class="v-menu--item"
    :class="[
      {
        ['disabled']: disabled,
      }
    ]"
    :to="to"
    :style="style"
    role="menuitem"
    aria-selected="false"
    v-if="to && !disabled">
    <span class="v-menu--item-inner">
      <slot></slot>
    </span>
  </router-link>
  <li
    class="v-menu--item"
    :class="[
      {
        ['active']: active,
        ['disabled']: disabled,
      }
    ]"
    :style="style"
    role="menuitem"
    aria-selected="false"
    @click="handleClick"
    v-else>
    <span class="v-menu--item-inner">
      <template v-if="href && !disabled">
        <a :href="href" :target="target"><slot></slot></a>
      </template>
      <template v-else><slot></slot></template>
    </span>
  </li>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'MenuItem',
    componentName: 'MenuItem',
    mixins: [Emitter],
    inject: ['menu'],
    props: {
      index: String,
      to: [String, Object],
      href: String,
      target: {
        type: String,
        default: '_blank',
      },
      disabled: Boolean,
    },
    computed: {
      active() {
        return this.index === this.menu.active;
      },
      style() {
        const height = this.menu.height;
        let style = {};
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
        this.menu.mode === 'vertical' && (style.paddingLeft = `${indent}px`);
        style.lineHeight = `${height}px`;
        return style;
      },
    },
    methods: {
      handleClick() {
        if (this.href || this.disabled)  return;
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
