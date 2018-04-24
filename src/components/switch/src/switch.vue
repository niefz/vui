<template>
  <div
    class="v-switch"
    :class="[
      {
        ['disabled']: isDisabled,
        ['checked']: checked
      }
    ]"
    :style="style">
    <label class="v-switch--inner">
      <input
        ref="input"
        class="v-switch--inner-input"
        type="checkbox"
        :name="name"
        :disabled="isDisabled"
        @change="handleChange">
    </label>
  </div>
</template>
<script>
  export default {
    name: 'Switch',
    componentName: 'Switch',
    props: {
      width: {
        type: Number,
        default: 40
      },
      value: {
        type: [Boolean, String, Number],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String,
        default: ''
      },
      beforeSwitch: Function,
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
      checked () {
        return this.value;
      },
      isDisabled () {
        return this.disabled;
      },
    },
    watch: {
      value(val) {
        this.$emit('change', val);
      }
    },
    methods: {
      change() {
        this.$emit('input', this.$refs.input.checked);
      },
      handleChange() {
        if (typeof this.beforeSwitch === 'function') {
          this.beforeSwitch(this.change);
        } else {
          this.change();
        }
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>