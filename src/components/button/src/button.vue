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
    :disabled="buttonDisabled"
    @click="handleClick">
    <template v-if="loading">
      <v-icon icon="v-icon-loading" v-if="loading"></v-icon>
      <slot></slot>
    </template>
    <template v-else>
      <v-icon :icon="prefixIcon" v-if="prefixIcon"></v-icon>
      <slot></slot>
      <v-icon :icon="suffixIcon" v-if="suffixIcon"></v-icon>
    </template>
  </button>
</template>
<script>
  import Icon from '@/components/icon';

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
      buttonSize() {
        return this.size || (this.$VUI || {}).size;
      },
      isDisabled() {
        return this.disabled || this.loading;
      },
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
    },
  };
</script>
