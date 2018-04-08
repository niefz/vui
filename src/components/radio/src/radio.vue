<template>
  <label
    class="v-radio"
    :class="[
      'v-radio__' + radioSize,
      {
        'checked': model === value,
        'bordered': border,
        'disabled': isDisabled,
      }
    ]"
    role="radio"
    :aria-checked="model === value"
    :aria-disabled="isDisabled"
    @keydown.space.stop.prevent="model = label"
    :tabindex="tabIndex">
    <span
      class="v-radio__input">
      <em class="v-radio__input-inner"></em>
      <input
        v-model="model"
        class="v-radio__input-original"
        type="radio"
        :name="name"
        :value="value"
        :disabled="isDisabled"
        @change="handleChange"
        tabindex="-1">
    </span>
    <span class="v-radio__label"  v-if="$slots.default || label">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'Radio',
    componentName: 'Radio',
    mixins: [Emitter],
    model: {
      prop: 'vmodel',
    },
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
      vmodel: {},
      disabled: {
        type: Boolean,
        default: false,
      },
      border: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        if (parent) {
          if (parent.$options.componentName !== 'RadioGroup') {
            parent = parent.$parent;
          } else {
            this._radioGroup = parent;
            return true;
          }
        }
        return false;
      },
      radioSize() {
        const radioSize = this.size || (this.$VUI || {}).size;
        return this.isGroup ? this._radioGroup.radioGroupSize || radioSize : radioSize;
      },
      model: {
        get() {
          return this.isGroup ? this._radioGroup.value : this.vmodel;
        },
        set(value) {
          if (this.isGroup) {
            this.dispatch('RadioGroup', 'input', value);
          } else {
            this.$emit('input', value);
          }
        }
      },
      isDisabled() {
        return this.isGroup ? this._radioGroup.disabled || this.disabled : this.disabled;
      },
      tabIndex() {
        return this.isDisabled ? -1 : (this.isGroup ? (this.model === this.value ? 0 : -1) : 0);
      }
    },
    methods: {
      handleChange(event) {
        const value = this.value;
        this.$nextTick(() => {
          this.$emit('change', value, event);
          if (this.isGroup) {
            this.dispatch('RadioGroup', 'change', value);
          }
        });
      }
    },
  };
</script>
