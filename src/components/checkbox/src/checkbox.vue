<template>
  <label
    class="v-checkbox"
    :class="[
      'v-checkbox--' + checkboxSize,
      {
        ['indeterminate']: indeterminate,
        ['checked']: isChecked,
        ['bordered']: border,
        ['disabled']: isDisabled,
      }
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed': isChecked"
    :aria-disabled="isDisabled">
    <span
      class="v-checkbox--input">
      <em class="v-checkbox--input-inner"></em>
      <input
        v-model="model"
        class="v-checkbox--input-original"
        type="checkbox"
        :name="name"
        :value="value"
        :disabled="isDisabled"
        @change="handleChange">
    </span>
    <span class="v-checkbox--label" v-if="$slots.default || label">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'Checkbox',
    componentName: 'Checkbox',
    inheritAttrs: false,
    mixins: [Emitter],
    model: {
      prop: 'vmodel',
    },
    props: {
      vmodel: {},
      size: {
        type: String,
        default: 'small',
      },
      name: String,
      label: String,
      value: [String, Number],
      indeterminate: Boolean,
      border: Boolean,
      disabled: Boolean,
    },
    data() {
      return {
        isLimitExceeded: false,
      };
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        if (parent) {
          if (parent.$options.componentName !== 'CheckboxGroup') {
            parent = parent.$parent;
          } else {
            this._checkboxGroup = parent;
            return true;
          }
        }
        return false;
      },
      store() {
        return this._checkboxGroup ? this._checkboxGroup.value : this.vmodel;
      },
      checkboxSize() {
        const checkboxSize = this.size || (this.$VUI || {}).size;
        return this.isGroup ? this._checkboxGroup.checkboxGroupSize || checkboxSize : checkboxSize;
      },
      model: {
        get() {
          return this.isGroup ? this.store : this.vmodel;
        },
        set(value) {
          if (this.isGroup) {
            this.isLimitExceeded = false;
            (this._checkboxGroup.min && value.length < this._checkboxGroup.min && (this.isLimitExceeded = true));
            (this._checkboxGroup.max && value.length > this._checkboxGroup.max && (this.isLimitExceeded = true));
            this.isLimitExceeded === false && this.dispatch('CheckboxGroup', 'input', [value]);
          } else {
            this.$emit('input', value);
          }
        }
      },
      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.value) > -1;
        }
      },
      isDisabled() {
        return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
      },
    },
    methods: {
      handleChange(event) {
        if (this.isLimitExceeded) return;
        const value = event.target.checked ? this.value ? this.value : event.target.checked : false;
        this.$nextTick(() => {
          this.$emit('change', value, event);
          if (this.isGroup) {
            this.dispatch('CheckboxGroup', 'change', [this._checkboxGroup.value]);
          }
        });
      }
    },
  };
</script>
