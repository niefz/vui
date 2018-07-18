<template>
  <div
    class="v-switch"
    :class="[
      {
        ['disabled']: isDisabled,
        ['checked']: isChecked
      }
    ]"
    :style="style"
    @click="handleClick">
    <label class="v-switch--inner">
      <template v-if="isChecked">
        <em class="v-switch--inner-on">
          <slot name="on"></slot>
        </em>
      </template>
      <input
        ref="input"
        class="v-switch--inner-input"
        type="checkbox"
        :name="name"
        @change.stop="handleChange"
        :disabled="isDisabled">
      <template v-if="!isChecked">
        <em class="v-switch--inner-off">
          <slot name="off"></slot>
        </em>
      </template>
    </label>
  </div>
</template>
<script>
  export default {
    name: 'Toggle',
    inheritAttrs: false,
    props: {
      value: {
        type: [Boolean, String, Number],
        default: false,
      },
      name: {
        type: String,
      },
      width: {
        type: Number,
        default: 40,
      },
      beforeToggle: {
        type: Function,
      },
      disabled: {
        type: Boolean,
      },
    },
    data() {
      return {};
    },
    computed: {
      style() {
        let style = {};
        style.width = `${this.width}px`;
        return style;
      },
      isChecked() {
        return this.value;
      },
      isDisabled() {
        return this.disabled;
      },
    },
    methods: {
      change() {
        this.$emit('input', this.$refs.input.checked);
      },
      handleChange() {
        if (typeof this.beforeToggle === 'function') {
          this.beforeToggle(this.change);
        } else {
          this.change();
        }
      },
      handleClick() {
        this.$emit('change', this.$refs.input.checked);
      },
    },
  };
</script>
