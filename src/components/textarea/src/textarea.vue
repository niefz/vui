<template>
  <div
    class="v-textarea"
    :class="[
      {
        ['disabled']: disabled,
      }
    ]">
    <textarea
      class="v-textarea--inner"
      :row="rows"
      :placeholder="placeholder"
      :autocomplete="autocomplete"
      :readonly="readonly"
      :disabled="disabled"
      @input="handleInput"></textarea>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Textarea',
    componentName: 'Textarea',
    components: {
      VIcon: Icon,
    },
    props: {
      size: {
        type: String,
        default: 'small',
      },
      rows: {
        type: Number,
        default: 2,
      },
      placeholder: {
        type: String,
        default: '',
      },
      autocomplete: {
        type: String,
        default: 'off',
      },
      readonly: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      clearable: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {};
    },
    computed: {
      textareaSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
    methods: {
      handleInput(event) {
        const value = event.target.value;
        this.$emit('input', value);
      },
    },
  };
</script>
