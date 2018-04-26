<template>
  <div class="v-input--number">
    <v-input
      :size="size"
      :value="currentValue"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :prepend="prepend"
      :prefix-icon="prefixIcon"
      :suffix-icon="suffixIcon"
      :append="append"
      :readonly="readonly"
      :error="isError"
      :disabled="disabled"
      @prefix-click="handlePrefixIcon"
      @suffix-click="handleSuffixIcon"
      @keyup="handleKeyup"
      @input="handleInput">
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
    </v-input>
    <div class="v-input--number-handler">
      <em class="v-input--number-handler-up" :class="{'disabled': increaseDisabled}" @click.stop="handleIncrease">
        <v-icon icon="v-icon-arrow-up"></v-icon>
      </em>
      <em class="v-input--number-handler-down" :class="{'disabled': minusDisabled}" @click.stop="handleMinus">
        <v-icon icon="v-icon-arrow-down"></v-icon>
      </em>
    </div>
  </div>
</template>
<script>
  import Input from '@/components/input';
  import Icon from '@/components/icon';

  export default {
    name: 'Input',
    componentName: 'Input',
    components: {
      VInput: Input,
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
      step: {
        type: Number,
        default: 1,
      },
      max: Number,
      min: Number,
    },
    data() {
      return {
        currentValue: this.value,
      };
    },
    watch: {
      value (val) {
        this.currentValue = val;
      },
    },
    computed: {
      inputSize() {
        return this.size || (this.$VUI || {}).size;
      },
      increaseDisabled() {
        return Number(this.currentValue) >= this.max;
      },
      minusDisabled() {
        return Number(this.currentValue) <= this.min;
      },
      isError() {
        return (this.max && this.currentValue > this.max) || (this.min && this.currentValue < this.min);
      },
    },
    methods: {
      setCurrentValue(val) {
        this.currentValue = val;
        this.$emit('input', val);
        this.$emit('change', val);
      },
      handleKeyup(event) {
        this.$emit('keyup', event);
      },
      handleInput(event) {
        let val = event.target.value.trim();
        if (event.type == 'input' && val.match(/^[-]?\.?$|\.$/)) return;
        let value = Number(val);
        if (!isNaN(value)) {
          this.currentValue = value;
        } else {
          event.target.value = this.currentValue || '';
        }
      },
      handlePrefixIcon() {
        this.$emit('prefix-click');
      },
      handleIncrease() {
        if (this.increaseDisabled) return;
        const value = (this.currentValue || 0) + this.step;
        this.setCurrentValue(value);
      },
      handleMinus() {
        if (this.minusDisabled) return;
        const value = (this.currentValue || 0) - this.step;
        this.setCurrentValue(value);
      },
      handleSuffixIcon() {
        this.$emit('suffix-click');
      },
    },
  };
</script>
