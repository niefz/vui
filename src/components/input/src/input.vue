<template>
  <div
    class="v-input"
    :class="[
      'v-input--' + inputSize,
      {
        ['v-input--slot']: $slots.prepend || $slots.append || prepend || append,
        ['v-input--slot-prepend']: $slots.prepend || prepend,
        ['v-input--slot-append']: $slots.append || append,
        ['disabled']: disabled,
      }
    ]">
    <div class="v-input--prepend" :class="{'v-input--prepend-inner': prepend}" v-if="$slots.prepend || prepend">
      <template v-if="prepend">{{prepend}}</template>
      <template v-else><slot name="prepend"></slot></template>
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
        <v-icon :icon="prefixIcon" @click.stop="handlePrefixIcon"></v-icon>
      </em>
      <input
        type="text"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInput">
      <em class="v-input--inner-suffix" v-if="suffixIcon">
        <v-icon :icon="suffixIcon" @click.stop="handleSuffixIcon"></v-icon>
      </em>
    </div>
    <div class="v-input--append" :class="{'v-input--append-inner': append}" v-if="$slots.append || append">
      <template v-if="append">{{append}}</template>
      <template v-else><slot name="append"></slot></template>
    </div>
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
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
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
