<template>
  <button
    :type="nativeType"
    class="v-btn"
    :class="[
      'v-btn__' + type,
      'v-btn__' + shape,
      'v-btn__' + theme,
      'v-btn__' + buttonSize,
      {
        'disabled': disabled,
        'loading': loading,
      }
     ]"
    :disabled="disabled"
    @click="handleClick">
    <span v-if="loading">
      <i class="v-icon-loading" v-if="loading"></i>
      <slot></slot>
    </span>
    <span v-else>
      <i :class="prefixIcon" v-if="prefixIcon"></i>
      <slot></slot>
      <i :class="suffixIcon" v-if="suffixIcon"></i>
    </span>
  </button>
</template>
<script>
  export default {
    name: 'Button',
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
      disabled: Boolean,
      loading: Boolean,
      prefixIcon: {
        type: String,
        default: '',
      },
      suffixIcon: {
        type: String,
        default: '',
      },
    },
    computed: {
      buttonSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      },
    },
  };
</script>
