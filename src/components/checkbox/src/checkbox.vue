<template>
  <div
    class="v-checkbox"
    :class="[
      'v-checkbox__' + checkboxSize,
      {
        'disabled': isDisabled,
        'bordered': border,
        'checked': isChecked,
      }
    ]"
    role="checkbox"
    :aria-checked="indeterminate ? 'mixed': isChecked"
    :aria-disabled="isDisabled">
    <span
      class="v-checkbox__input"
      :class="[
        {
          'checked': isChecked,
          'disabled': isDisabled,
          'indeterminate': indeterminate,
        }
      ]"
      aria-checked="mixed">
      <em class="v-checkbox__inner"></em>
      <input
        class="v-checkbox__original"
        type="checkbox"
        :name="name"
        :value="label"
        :disabled="isDisabled"
        @change="handleChange">
    </span>
    <label class="v-checkbox__label"  v-if="$slots.default || label">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{label}}</template>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'Checkbox',
    componentName: 'Checkbox',
    props: {
      label: {
        type: String,
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      value: {
        type: String,
        default: '',
      },
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
      size: {
        type: String,
        default: 'small',
      },
    },
    computed: {
      checkboxSize() {
        return this.size || (this.$VUI || {}).size;
      },
      isDisabled() {
        return this.disabled;
      },
      isChecked() {
        return this.checked;
      },
    },
    methods: {
      handleChange(event) {
        console.log(event);
      },
    },
  };
</script>
