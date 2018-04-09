<template>
  <div
    :class="[
      {
        ['v-input v-input--' + inputSize]: type === 'text',
        ['v-textarea v-textarea--' + inputSize]: type === 'textarea',
        ['v-input--prefix']: prefixIcon,
        ['v-input--suffix']: suffixIcon,
        ['disabled']: isDisabled,
      }
    ]">
    <template v-if="type === 'textarea'">
      <textarea :row="row"></textarea>
    </template>
    <template v-else>
      <em class="v-input--prefix-inner" v-if="prefixIcon"><v-icon :icon="prefixIcon" @click="handlePrefixIcon"></v-icon></em>
      <input class="v-input--inner" type="text">
      <em class="v-input--suffix-inner" v-if="suffixIcon"><v-icon :icon="suffixIcon" @click="handleSuffixIcon"></v-icon></em>
    </template>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Input',
    componentName: 'Input',
    components: {
      VIcon: Icon,
    },
    props: {
      size: {
        type: String,
        default: 'small',
      },
      type: {
        type: String,
        default: 'text',
      },
      placeholder: {
        type: String,
        default: 'text',
      },
      autocomplete: {
        type: String,
        default: 'off',
      },
      rows: {
        type: Number,
        default: 2,
      },
      prefixIcon: {
        type: String,
        default: '',
      },
      suffixIcon: {
        type: String,
        default: '',
      },
      clearable: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {

      };
    },
    computed: {
      inputSize() {
        return this.size || (this.$VUI || {}).size;
      },
      isDisabled() {
        return this.disabled;
      },
    },
    methods: {
      handlePrefixIcon() {
        this.$emit('prefix-click');
      },
      handleSuffixIcon() {
        this.$emit('suffix-click');
      },
    },
  };
</script>
