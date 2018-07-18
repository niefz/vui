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
      <template v-if="maxlength">
        <em class="v-textarea--count">{{value.length}}/{{maxlength}}</em>
      </template>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Textarea',
    components: {
      VIcon: Icon,
    },
    inheritAttrs: false,
    model: {
      prop: 'value',
    },
    props: {
      value: {
        type: String,
      },
      size: {
        type: String,
        default: 'small',
      },
      rows: {
        type: Number,
        default: 2,
      },
      maxlength: {
        type: Number,
        default: 0,
      },
      placeholder: {
        type: String,
      },
      autocomplete: {
        type: String,
        default: 'off',
      },
      readonly: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      clearable: {
        type: Boolean,
        default: false,
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
