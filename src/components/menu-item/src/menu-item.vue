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
    inject: ['menu'],
    mixins: [Emitter],
    inheritAttrs: false,
    props: {
      index: {
        type: String,
      },
      to: {
        type: [String, Object],
      },
      href: {
        type: String,
      },
      target: {
        type: String,
        default: '_blank',
      },
      disabled: {
        type: Boolean,
      },
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
        while (parent && parent.$options.name !== 'Menu') {
          if (parent.$options.name === 'MenuSub') {
            indent += 20;
          } else if (parent.$options.name === 'MenuItemGroup') {
            indent += 20;
          }
          parent = parent.$parent;
        }
        this.menu.mode === 'vertical' && (style.paddingLeft = `${indent}px`);
        style.lineHeight = `${height}px`;
        return style;
      },
    },
    created() {
      this.menu.addMenuItem(this);
    },
    beforeDestroy() {
      this.menu.removeMenuItem(this);
    },
    methods: {
      handleClick() {
        if (this.href || this.disabled)  return;
        this.dispatch('Menu', 'menu-item-click', [this]);
        this.$emit('click', this);
      },
    },
  };
</script>
