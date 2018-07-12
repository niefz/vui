<template>
  <div class="v-input--number">
    <Input
      :size="size"
      :value="currentValue"
      :placeholder="placeholder"
      :error="isError"
      :disabled="disabled"
      @keyup="handleKeyup"
      @input="handleInput">
      <template slot="prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </template>
      <template slot="append" v-if="$slots.append">
        <slot name="append"></slot>
      </template>
    </Input>
    <div class="v-input--number-handler">
      <em class="v-input--number-handler-up" :class="{'disabled': increaseDisabled}" @click.stop="handleIncrease">
        <Icon icon="v-icon-arrow-up-o"></Icon>
      </em>
      <em class="v-input--number-handler-down" :class="{'disabled': minusDisabled}" @click.stop="handleMinus">
        <Icon icon="v-icon-arrow-down-o"></Icon>
      </em>
    </div>
  </div>
</template>
<script>
  import Input from 'free-vui/src/components/input';
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'InputNumber',
    components: {
      Input,
      Icon,
    },
    inheritAttrs: false,
    props: {
      value: {},
      size: {
        type: String,
        default: 'small',
      },
      placeholder: String,
      max: Number,
      min: Number,
      precision: Number,
      step: {
        type: Number,
        default: 1,
      },
      formatter: Function,
      disabled: {
        type: Boolean,
        default: false,
      },
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
