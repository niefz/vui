<template>
  <button
    :type="nativeType"
    class="v-btn"
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
      <v-icon :class="{'prefix-icon': $slots.default}" icon="icon-loading" v-if="loading"></v-icon>
      <slot></slot>
    </template>
    <template v-else>
      <v-icon :class="{'prefix-icon': $slots.default}" :icon="prefixIcon" v-if="prefixIcon"></v-icon>
      <slot></slot>
      <v-icon :class="{'suffix-icon': $slots.default}" :icon="suffixIcon" v-if="suffixIcon"></v-icon>
    </template>
  </button>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Button',
    componentName: 'Button',
    components: {
      VIcon: Icon,
    },
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
          if (parent.$options.componentName !== 'ButtonGroup') {
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
        return this.isGroup ? this._buttonGroup.size || this.buttonSize : buttonSize;
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
