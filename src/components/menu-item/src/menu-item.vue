<template>
  <li
    class="v-menu--item"
    :class="[
      {
        ['active']: active,
        ['disabled']: disabled,
      }
    ]"
    role="menuitem"
    @click="handleClick">
    <template>
      <slot></slot>
      <slot name="title"></slot>
    </template>
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'MenuItem',
    componentName: 'MenuItem',
    mixins: [Emitter],
    props: {
      active: Boolean,
      disabled: Boolean,
    },
    computed: {},
    methods: {
      handleClick() {
        if (this.disabled)  return;
        this.dispatch('Menu', 'menu-item-click', [this]);
        this.$emit('click', this);
      },
    },
  };
</script>
