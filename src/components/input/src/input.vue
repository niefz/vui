<template>
  <div
    :class="[
      {
        ['v-input']: !prepend && !$slots.prepend && !append && !$slots.append,
        ['v-input--group']: prepend || $slots.prepend || append || $slots.append,
        ['v-input--' + inputSize]: inputSize,
        ['error']: error,
        ['disabled']: disabled,
      }
    ]">
    <template v-if="prepend">
      <span class="v-input--group-text">{{ prepend }}</span>
    </template>
    <template v-else-if="$slots.prepend">
      <div class="v-input--group-pend">
        <slot name="prepend"></slot>
      </div>
    </template>
    <div
      class="v-input--inner"
      :class="[
        {
          ['v-input--prefix']: prefixIcon,
          ['v-input--suffix']: suffixIcon,
        }
      ]">
      <em class="v-input--inner-fix-icon prefix" v-if="prefixIcon">
        <Icon :icon="prefixIcon" @click.stop="handlePrefixIcon"></Icon>
      </em>
      <input
        class="v-input--inner-input"
        type="text"
        :value="value"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :readonly="readonly"
        :disabled="disabled"
        @keyup="handleKeyup"
        @input="handleInput">
      <em class="v-input--inner-fix-icon suffix" v-if="suffixIcon">
        <Icon :icon="suffixIcon" @click.stop="handleSuffixIcon"></Icon>
      </em>
    </div>
    <template v-if="append">
      <span class="v-input--group-text">{{ append }}</span>
    </template>
    <template v-else-if="$slots.append">
      <div class="v-input--group-pend">
        <slot name="append"></slot>
      </div>
    </template>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Input',
    componentName: 'Input',
    inheritAttrs: false,
    components: {
      Icon,
    },
    props: {
      size: {
        type: String,
        default: 'small',
      },
      value: [String, Number],
      placeholder: {
        type: String,
        default: '',
      },
      autocomplete: {
        type: String,
        default: 'off',
      },
      prepend: {
        type: String,
        default: '',
      },
      prefixIcon: {
        type: String,
        default: '',
      },
      suffixIcon: {
        type: String,
        default: '',
      },
      append: {
        type: String,
        default: '',
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {};
    },
    computed: {
      inputSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
    methods: {
      handleKeyup(event) {
        this.$emit('keyup', event);
      },
      handleInput(event) {
        this.$emit('input', event);
      },
      handlePrefixIcon() {
        this.$emit('prefix-click');
      },
      handleSuffixIcon() {
        this.$emit('suffix-click');
      },
    },
  };
</script>
