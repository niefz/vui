<template>
  <li
    class="v-dropdown-menu--item"
    :class="[
      {
        ['divided']: divided,
        ['disabled']: disabled,
      }
    ]"
    @click="handleClick"
    :tabindex="disabled ? null : -1"
    :aria-disabled="disabled">
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'DropdownMenuItem',
    mixins: [Emitter],
    inheritAttrs: false,
    props: {
      value: {},
      divided: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
      },
    },
    methods: {
      handleClick() {
        if (this.disabled) return;
        this.dispatch('Dropdown', 'menu-item-click', [this.value, this]);
      },
    },
  };
</script>
