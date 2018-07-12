<template>
  <Input
    ref="reference"
    class="v-picker"
    :class="[
      'v-picker--' + pickerSize
    ]"
    :value="displayValue"
    :placeholder="placeholder"
    :readonly="readonly"
    :disabled="pickerDisabled"
    @focus="handleFocus"
    @input="value => userInput = value"
    @change="handleChange"
    @keydown.native="handleKeydown"
    @mouseenter.native="handleMouseEnter"
    @mouseleave.native="showClose = false"
    v-clickoutside="handleClose"
    v-if="!ranged">
  </Input>
  <div
    ref="reference"
    class="v-range-picker"
    :class="[
      'v-picker--' + pickerSize,
      {
        'disabled': pickerDisabled,
        'active': pickerVisible
      }
    ]"
    @click="handleRangeClick"
    @keydown="handleKeydown"
    @mouseenter="handleMouseEnter"
    @mouseleave="showClose = false"
    v-clickoutside="handleClose"
    v-else>
  </div>
</template>
<script>
  import Clickoutside from 'free-vui/src/directives/clickoutside';
  import Emitter from 'free-vui/src/mixins/emitter';
  import Popper from 'free-vui/src/utils/popper';
  import Input from 'free-vui/src/components/input';
  import Icon from 'free-vui/src/components/icon';
  import PickerDate from './picker-date.vue';
  import PickerTime from './picker-time.vue';

  const NewPopper = {
    props: {
      boundariesPadding: Popper.props.boundariesPadding,
      offset: Popper.props.offset,
      arrowOffset: Popper.props.arrowOffset,
      appendToBody: Popper.props.appendToBody,
    },
    methods: Popper.methods,
    data() {
      return Popper.data;
    },
    beforeDestroy: Popper.beforeDestroy,
  };

  export default {
    name: 'DateTimePicker',
    components: {
      Icon,
      Input,
      PickerDate,
      PickerTime,
    },
    directives: { Clickoutside },
    mixins: [Emitter, NewPopper],
    inheritAttrs: false,
    props: {
      placement: {
        type: String,
        default: 'top-start',
      },
      transition: {
        type: String,
        default: 'zoom-in-top',
      },
      type: {
        type: String,
        default: 'date',
      },
      size: {
        type: String,
        default: 'small',
      },
      placeholder: {
        type: String,
        default: '',
      },
      value: {},
      autocomplete: {
        type: String,
        default: 'off',
      },
      prefixIcon: {
        type: String,
        default: '',
      },
      suffixIcon: {
        type: String,
        default: 'v-icon-calendar',
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
      ranged: Boolean,
      pickerOptions: {},
    },
    data() {
      return {
        datetime: null,
        pickerVisible: false,
      };
    },
    computed: {
      pickerSize() {
        return this.size || (this.$VUI || {}).size;
      },
      pickerDisabled() {
        return this.disabled;
      },
      reference() {
        const reference = this.$refs.reference;
        return reference.$el || reference;
      },
      datePlaceholder() {
        return this.placeholder || '选择日期';
      },
      displayValue() {
        return '';
      },
    },
    watch: {
      pickerVisible(val) {
        if (this.readonly || this.pickerDisabled) return;
        if (val) {
          this.showPicker();
        } else {
          this.hidePicker();
          this.emitChange(this.value);
          this.dispatch('ElFormItem', 'el.form.blur');
          this.$emit('blur', this);
          this.blur();
        }
      },
    },
    methods: {
      handleFocus() {
        this.showPopper = true;
      },
      handleBlur() {
        this.showPopper = false;
      },
      change() {
      },
      handleChange() {
      },
      showPicker() {
        if (this.$isServer) return;
        if (!this.picker) {
          this.mountPicker();
        }
        this.pickerVisible = this.picker.visible = true;
        this.updatePopper();
        this.picker.value = this.parsedValue;
        this.picker.resetView && this.picker.resetView();
        this.$nextTick(() => {
          this.picker.adjustSpinners && this.picker.adjustSpinners();
        });
      },
      handleClose() {
      },
    },
  };
</script>
