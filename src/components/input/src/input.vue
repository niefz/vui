<template>
  <div
    class="v-input"
    :class="[
      'v-input--' + inputSize,
      {
        ['v-input--group']: $slots.prepend || $slots.append || prepend || append,
        ['prepend']: prepend,
        ['slot-prepend']: $slots.prepend,
        ['append']: append,
        ['slot-append']: $slots.append,
        ['error']: error,
        ['disabled']: disabled,
      }
    ]">
    <div class="v-input--group-prepend" v-if="$slots.prepend || prepend">
      <template v-if="prepend">
        <span class="v-input--group-text">{{prepend}}</span>
      </template>
      <template v-else>
        <slot name="prepend"></slot>
      </template>
    </div>
    <div
      class="v-input--inner"
      :class="[
        {
          ['v-input--prefix']: prefixIcon,
          ['v-input--suffix']: suffixIcon,
        }
      ]">
      <em class="v-input--inner-prefix" v-if="prefixIcon">
        <Icon :icon="prefixIcon" @click.stop="handlePrefixIcon"></Icon>
      </em>
      <input
        type="text"
        :value="value"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :readonly="readonly"
        :disabled="disabled"
        @keyup="handleKeyup"
        @input="handleInput">
      <em class="v-input--inner-suffix" v-if="suffixIcon">
        <Icon :icon="suffixIcon" @click.stop="handleSuffixIcon"></Icon>
      </em>
    </div>
    <div class="v-input--group-append" v-if="$slots.append || append">
      <template v-if="append">
        <span class="v-input--group-text">{{append}}</span>
      </template>
      <template v-else>
        <slot name="append"></slot>
      </template>
    </div>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Input',
    componentName: 'Input',
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
