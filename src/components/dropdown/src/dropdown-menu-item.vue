<template>
  <li
    class="v-dropdown-menu--item"
    :class="{
      'divided': divided,
      'disabled': disabled,
    }"
    @click="handleClick"
    :aria-disabled="disabled"
    :tabindex="disabled ? 0 : -1">
    <slot></slot>
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'DropdownMenuItem',
    componentName: 'DropdownMenuItem',
    mixins: [Emitter],
    props: {
      command: {},
      divided: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleClick() {
        this.dispatch('Dropdown', 'menu-item-click', [this.command, this]);
      },
    },
  };
</script>
