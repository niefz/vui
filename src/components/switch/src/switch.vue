<template>
  <div
    class="v-switch"
    :class="{ 
      'is-disabled': switchDisabled,
      'is-checked': checked }"
  >
    <label class="v-switch__ground">
      <input
        class="v-switch__input"
        type="checkbox"
        @change="handleChange"
        ref="input"
        :name="name"
        :disabled="switchDisabled"
      >
    </label>
  </div>
</template>
<script>
  export default {
    name: 'Switch',
    props: {
      value: {
        type: Boolean,
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
    },
    data() {
      return {
      };
    },
    created() {
    },
    mounted() {
    },
    computed: {
      checked () {
        return this.value
      },
      switchDisabled () {
        return this.disabled
      },
    },
    watch: {
    },
    methods: {
      handleChange(event) {
        console.log(event, this.$refs['input'].checked)
        this.$emit('input', this.$refs['input'].checked)
      },
    },
  };
</script>