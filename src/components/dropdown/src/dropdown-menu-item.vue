<template>
  <li
    class="v-dropdown-menu--item"
    :class="{
      'divided': divided,
      'disabled': disabled,
    }"
    @click="handleClick"
    :tabindex="disabled ? 0 : -1"
    :aria-disabled="disabled">
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
      value: {},
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
        this.dispatch('Dropdown', 'menu-item-click', this.value);
      },
    },
  };
</script>
