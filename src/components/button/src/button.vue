<template>
  <button
    :type="nativeType"
    :class="[
      'v-btn--' + type,
      'v-btn--' + shape,
      'v-btn--' + theme,
      'v-btn--' + buttonSize,
      {
        ['plain']: plain,
        ['disabled']: isDisabled,
      }
     ]"
    :disabled="isDisabled"
    @click="handleClick">
    <template v-if="loading">
      <Icon :class="{'prefix-icon': $slots.default}" icon="v-icon-loading" v-if="loading"></Icon>
      <slot></slot>
    </template>
    <template v-else>
      <Icon :class="{'prefix-icon': $slots.default}" :icon="prefixIcon" v-if="prefixIcon"></Icon>
      <slot></slot>
      <Icon :class="{'suffix-icon': $slots.default}" :icon="suffixIcon" v-if="suffixIcon"></Icon>
    </template>
  </button>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Button',
    components: {
      Icon,
    },
    inheritAttrs: false,
    props: {
      nativeType: {
        type: String,
        default: 'button',
      },
      type: {
        type: String,
        default: 'button',
      },
      shape: {
        type: String,
        default: 'radius',
      },
      theme: {
        type: String,
        default: 'default',
      },
      size: {
        type: String,
        default: 'small',
      },
      prefixIcon: {
        type: String,
        default: '',
      },
      suffixIcon: {
        type: String,
        default: '',
      },
      plain: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      loading: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        if (parent) {
          if (parent.$options.name !== 'ButtonGroup') {
            parent = parent.$parent;
          } else {
            this._buttonGroup = parent;
            return true;
          }
        }
        return false;
      },
      buttonSize() {
        const buttonSize = this.size || (this.$VUI || {}).size;
        return this.isGroup ? this._buttonGroup.size || buttonSize : buttonSize;
      },
      isDisabled() {
        const buttonDisabled = this.disabled || this.loading;
        return this.isGroup ? this._buttonGroup.disabled || buttonDisabled : buttonDisabled;
      },
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
    },
  };
</script>
