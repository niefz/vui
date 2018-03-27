<template>
  <label
    class="v-checkbox"
    :class="[
      'v-checkbox__' + checkboxSize,
      {
        'indeterminate': indeterminate,
        'checked': isChecked,
        'bordered': border,
        'disabled': isDisabled,
      }
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed': isChecked"
    :aria-disabled="isDisabled">
    <span
      class="v-checkbox__input"
      aria-checked="mixed">
      <em class="v-checkbox__input-inner"></em>
      <input
        v-model="model"
        class="v-checkbox__input-original"
        type="checkbox"
        :name="name"
        :value="value"
        :disabled="isDisabled"
        @change="handleChange">
    </span>
    <span class="v-checkbox__label"  v-if="$slots.default || label">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'Checkbox',
    componentName: 'Checkbox',
    mixins: [Emitter],
    props: {
      size: {
        type: String,
        default: 'small',
      },
      label: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      value: {},
      indeterminate: {
        type: Boolean,
        default: false,
      },
      checked: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      border: {
        type: Boolean,
        default: false,
      },
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
        return this._checkboxGroup ? this._checkboxGroup.value : this.value;
      },
      checkboxSize() {
        const checkboxSize = this.size || (this.$VUI || {}).size;
        return this.isGroup ? this._checkboxGroup.checkboxGroupSize || checkboxSize : checkboxSize;
      },
      model: {
        get() {
          return this.isGroup ? this.store : this.value ? this.value : false;
        },
        set(val) {
          if (this.isGroup) {
            this.isLimitExceeded = false;
            (this._checkboxGroup.min && val.length < this._checkboxGroup.min && (this.isLimitExceeded = true));
            (this._checkboxGroup.max && val.length > this._checkboxGroup.max && (this.isLimitExceeded = true));
            this.isLimitExceeded === false && this.dispatch('CheckboxGroup', 'input', [val]);
          } else {
            this.$emit('input', val);
          }
        }
      },
      isChecked() {
        if ({}.toString.call(this.model) === '[object Boolean]') {
          return this.model;
        } else if (Array.isArray(this.model)) {
          return this.model.indexOf(this.value) > -1;
        } else if (this.model) {
          return this.model === this.value;
        }
      },
      isDisabled() {
        return this.isGroup ? this._checkboxGroup.disabled || this.disabled : this.disabled;
      },
    },
    methods: {
      addToStore() {
        if (Array.isArray(this.model) && this.model.indexOf(this.value) === -1) {
          this.model.push(this.value);
        } else {
          this.model = this.value || true;
        }
      },
      handleChange(event) {
        if (this.isLimitExceeded) return;
        const value = event.target.checked ? this.value : '';
        this.$emit('change', value, event);
        if (this.isGroup) {
          this.$nextTick(() => {
            this.dispatch('CheckboxGroup', 'change', [this._checkboxGroup.value]);
          });
        }
      }
    },
    created() {
      this.checked && this.addToStore();
    },
  };
</script>
