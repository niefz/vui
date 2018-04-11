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
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'SelectMenuOption',
    componentName: 'SelectMenuOption',
    mixins: [Emitter],
    inject: ['select'],
    props: {
      label: [String, Number],
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
        this.dispatch('Select', 'select-option-click', [this.value]);
      },
    },
  };
</script>
