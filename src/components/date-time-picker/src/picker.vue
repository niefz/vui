<template>
  <div class="v-datetimepicker">
    <div
      ref="reference"
      class="v-input"
      :class="[
        'v-input--' + inputSize,
        {
          ['error']: error,
          ['disabled']: disabled,
        }
      ]">
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
          name="datetime"
          :value="value"
          :placeholder="datePlaceholder"
          :autocomplete="autocomplete"
          :readonly="readonly"
          :disabled="disabled"
          @focus="handleFocus"
          @blur="handleBlur">
        <em class="v-input--inner-suffix" v-if="suffixIcon">
          <v-icon :icon="suffixIcon" @click.stop="handleSuffixIcon"></v-icon>
        </em>
      </div>
    </div>
    <transition :name="transition">
      <div
        ref="popper"
        class="v-datetimepicker--content" 
        v-show="!disabled && showPopper">
        <v-picker-date></v-picker-date>
        <v-picker-time></v-picker-time>
      </div>
    </transition>
  </div>
</template>
<script>
  import Popper from 'free-vui/src/utils/popper';
  import Icon from 'free-vui/src/components/icon';
  import PickerDate from './picker-date.vue';
  import PickerTime from './picker-time.vue';

  export default {
    name: 'DateTimePicker',
    componentName: 'DateTimePicker',
    mixins: [Popper],
    components: {
      VIcon: Icon,
      VPickerDate: PickerDate,
      VPickerTime: PickerTime,
    },
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
    },
    data() {
      return {
        datetime: null,
        showPopper: false,
      };
    },
    computed: {
      inputSize() {
        return this.size || (this.$VUI || {}).size;
      },
      datePlaceholder() {
        return this.placeholder || '选择日期';
      },
    },
    methods: {
      handleFocus() {
        this.showPopper = true;
      },
      handleBlur() {
        this.showPopper = false;
      },
    },
  };
</script>
