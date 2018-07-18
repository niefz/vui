<template>
  <li
    class="v-dropdown-menu--item"
    :class="[
      {
      'divided': divided,
      'disabled': disabled,
      }
    ]"
    @click.stop="handleClick">
    <slot>
      <span>{{ label }}</span>
    </slot>
  </li>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'SelectMenuOption',
    inject: ['select'],
    mixins: [Emitter],
    inheritAttrs: false,
    props: {
      label: {
        type: [String, Number],
      },
      value: {
        required: true
      },
      divided: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      isObject() {
        return Object.prototype.toString.call(this.value).toLowerCase() === '[object object]';
      },
    },
    methods: {
      handleClick() {
        if (this.disabled) return;
        this.dispatch('Select', 'select-option-click', [this.value, this]);
      },
    },
  };
</script>
