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
    componentName: 'DropdownMenuItem',
    mixins: [Emitter],
    props: {
      value: {},
      disabled: Boolean,
      divided: Boolean
    },
    methods: {
      handleClick() {
        this.dispatch('Dropdown', 'menu-item-click', [this.value, this]);
      },
    },
  };
</script>
