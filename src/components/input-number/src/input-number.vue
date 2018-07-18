<template>
  <div class="v-input--number">
    <Input
      :size="inputSize"
      :value="currentInputValue"
      :placeholder="placeholder"
      :error="isError"
      :disabled="disabled"
      @input="handleInput">
    <template slot="prepend" v-if="$slots.prepend">
      <slot name="prepend"></slot>
    </template>
    <template slot="append" v-if="$slots.append">
      <slot name="append"></slot>
    </template>
    </Input>
    <template v-if="!disabled">
      <div class="v-input--number-handler">
        <em class="v-input--number-handler-up" :class="{ 'disabled': increaseDisabled }" @click.stop="handleIncrease">
          <Icon icon="v-icon-arrow-up-o"></Icon>
        </em>
        <em class="v-input--number-handler-down" :class="{ 'disabled': minusDisabled }" @click.stop="handleMinus">
          <Icon icon="v-icon-arrow-down-o"></Icon>
        </em>
      </div>
    </template>
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
      placeholder: {
        type: String,
      },
      max: {
        type: Number,
        default: Infinity
      },
      min: {
        type: Number,
        default: -Infinity
      },
      precision: {
        type: Number,
      },
      step: {
        type: Number,
        default: 1,
      },
      formatter: {
        type: Function,
      },
      parser: {
        type: Function,
      },
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
      value: {
        immediate: true,
        handler(val) {
          const { precision } = this;
          let newVal = val ? Number(val) : val;
          if (newVal) {
            if (precision) {
              newVal = this.toPrecision(newVal, precision);
            }
          }
          this.currentValue = newVal;
          this.$emit('input', newVal);
        },
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
        const { max, min, currentValue } = this;
        return (String(max) && currentValue > max) || (String(min) && currentValue < min);
      },
      currentInputValue() {
        const { currentValue, precision, formatter } = this;
        let currentInputValue = currentValue;
        if (precision) {
          currentInputValue = currentValue.toFixed(precision);
        }
        if (formatter) {
          currentInputValue = formatter(currentInputValue);
        }
        return currentInputValue;
      },
    },
    methods: {
      setCurrentValue(val) {
        const { precision } = this;
        if (val && !isNaN(precision)) val = this.toPrecision(val, precision);
        this.$nextTick(() => {
          this.currentValue = val;
          this.$emit('input', val);
          this.$emit('change', val);
        });
      },
      /**
       * 数值精度
       * @param num
       * @param precision
       * @returns {number}
       */
      toPrecision(num, precision) {
        return parseFloat(Number(num).toFixed(precision));
      },
      /**
       * input
       * @param event
       */
      handleInput(event) {
        let val = event.target.value.trim();
        let { parser } = this;
        if (parser) {
          val = parser(val);
        }
        if (event.type == 'input' && val.match(/^[-]?\.?$|\.$/)) return;
        val = Number(val);
        if (!isNaN(val)) {
          this.currentValue = val;
        } else {
          event.target.value = this.currentValue;
        }
      },
      /**
       * increase
       */
      handleIncrease() {
        if (this.increaseDisabled) return;
        const { currentValue, step } = this;
        this.setCurrentValue(currentValue + step);
      },
      /**
       * minus
       */
      handleMinus() {
        if (this.minusDisabled) return;
        const { currentValue, step } = this;
        this.setCurrentValue(currentValue - step);
      },
    },
  };
</script>
