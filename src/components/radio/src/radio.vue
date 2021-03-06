<template>
  <label
    role="radio"
    class="v-radio"
    :class="[
      'v-radio--' + radioSize,
      {
        ['checked']: isChecked,
        ['bordered']: border,
        ['disabled']: isDisabled,
      }
    ]"
    :aria-checked="isChecked"
    :aria-disabled="isDisabled"
    @keydown.space.stop.prevent="model = isDisabled ? model : value"
    :tabindex="tabIndex">
    <span
      class="v-radio--input">
      <em class="v-radio--input-inner"></em>
      <input
        v-model="model"
        class="v-radio--input-original"
        type="radio"
        :name="name"
        :value="value"
        :disabled="isDisabled"
        @change="handleChange"
        tabindex="-1">
    </span>
    <span class="v-radio--label"  v-if="$slots.default || label">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{label}}</template>
    </span>
  </label>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'Radio',
    mixins: [Emitter],
    inheritAttrs: false,
    model: {
      prop: 'vmodel',
    },
    props: {
      vmodel: {},
      size: {
        type: String,
        default: 'small',
      },
      name: {
        type: String,
      },
      label: {
        type: String,
      },
      value: {
        type: [String, Number],
      },
      border: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
      },
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        if (parent) {
          if (parent.$options.name !== 'RadioGroup') {
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
      isChecked() {
        return this.model === this.value;
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
