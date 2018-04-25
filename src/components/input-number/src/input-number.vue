<template>
  <div
    class="v-input--number"
    :class="[
      'v-input--' + inputSize,
      {
        ['v-input--slot']: $slots.prepend || $slots.append || prepend || append,
        ['prepend']: prepend,
        ['slot-prepend']: $slots.prepend,
        ['append']: append,
        ['slot-append']: $slots.append,
        ['disabled']: disabled,
      }
    ]">
    <div class="v-input--prepend" v-if="$slots.prepend || prepend">
      <template v-if="prepend">{{prepend}}</template>
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
        <v-icon :icon="prefixIcon" @click.stop="handlePrefixIcon"></v-icon>
      </em>
      <input
        type="text"
        :value="currentValue"
        :placeholder="placeholder"
        :autocomplete="autocomplete"
        :readonly="readonly"
        :disabled="disabled"
        @input="handleInput"
        @keyup="handleKeyup">
      <em class="v-input--inner-suffix" v-if="suffixIcon">
        <v-icon :icon="suffixIcon" @click.stop="handleSuffixIcon"></v-icon>
      </em>
    </div>
    <div class="v-input--number-handler">
      <em class="v-input--number-handler-up" :class="{'disabled': increaseDisabled}" @click.stop="handleIncrease">
        <v-icon icon="v-icon-arrow-up"></v-icon>
      </em>
      <em class="v-input--number-handler-down" :class="{'disabled': minusDisabled}" @click.stop="handleMinus">
        <v-icon icon="v-icon-arrow-down"></v-icon>
      </em>
    </div>
    <div class="v-input--append" v-if="$slots.append || append">
      <template v-if="append">{{append}}</template>
      <template v-else>
        <slot name="append"></slot>
      </template>
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
      value: {},
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
      step: {
        type: Number,
        default: 1,
      },
      max: Number,
      min: Number,
    },
    data() {
      return {
        currentValue: 0,
      };
    },
    watch: {
      value: {
        immediate: true,
        handler(value) {
          this.setCurrentValue(value);
        }
      }
    },
    computed: {
      inputSize() {
        return this.size || (this.$VUI || {}).size;
      },
      increaseDisabled() {
        return Number(this.currentValue) === this.max;
      },
      minusDisabled() {
        return Number(this.currentValue) === this.min;
      },
    },
    methods: {
      setCurrentValue(value, event) {
        let val = value === undefined ? value : Number(value);
        if (val >= this.max) val = this.max;
        if (val <= this.min) val = this.min;
        this.currentValue = val;
        if (event) event.target.value = val;
      },
      handleInput(event) {
        const value = event.target.value;
        const val = Number(value.replace(/[^\d]/g, ''));
        this.setCurrentValue(val, event);
        this.$emit('input', val);
      },
      handleKeyup(event) {
        this.$emit('keyup', event);
      },
      handlePrefixIcon() {
        this.$emit('prefix-click');
      },
      handleIncrease() {
        if (this.increaseDisabled) return;
        this.$emit('input', this.currentValue += this.step);
      },
      handleMinus() {
        if (this.minusDisabled) return;
        this.$emit('input', this.currentValue -= this.step);
      },
      handleSuffixIcon() {
        this.$emit('suffix-click');
      },
    },
  };
</script>
