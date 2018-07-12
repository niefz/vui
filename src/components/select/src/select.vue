<template>
  <div
    class="v-select"
    :class="[
      {
        ['v-select--' + selectSize]: selectSize,
        ['error']: error,
        ['disabled']: disabled,
      }
    ]"
    v-clickoutside="hide">
    <div
      ref="reference"
      role="reference"
      class="v-select--inner">
      {{ displayValue || displayPlaceholder }}
      <em class="v-input--inner-fix-icon suffix">
        <Icon icon="v-icon-caret-down"></Icon>
      </em>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import Clickoutside from 'free-vui/src/directives/clickoutside';
  import Emitter from 'free-vui/src/mixins/emitter';
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Select',
    components: {
      Icon,
    },
    provide() {
      return {
        select: this,
      };
    },
    directives: { Clickoutside },
    mixins: [Emitter],
    inheritAttrs: false,
    props: {
      value: {},
      size: {
        type: String,
        default: 'small',
      },
      placeholder: {
        type: String,
        default: '',
      },
      placement: {
        type: String,
        default: 'bottom-start',
      },
      showTimeout: {
        type: Number,
        default: 0,
      },
      hideTimeout: {
        type: Number,
        default: 0,
      },
      hideAfterClick: {
        type: Boolean,
        default: true,
      },
      appendToBody: {
        type: Boolean,
        default: true,
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
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
      return {
        visible: false,
        displayValue: this.value || '',
      };
    },
    computed: {
      selectSize() {
        return this.size || (this.$VUI || {}).size;
      },
      displayPlaceholder() {
        return this.placeholder || '请选择';
      },
    },
    watch: {
      visible(val) {
        this.broadcast('SelectMenu', 'visible', val);
        this.$emit('visible-change', val);
      },
    },
    mounted() {
      this.$on('select-option-click', this.handleSelectOptionClick);
      this.initEvent();
    },
    methods: {
      show() {
        if (this.triggerElm.disabled) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.showTimeout);
      },
      hide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, this.hideTimeout);
      },
      handleClick() {
        if (this.triggerElm.disabled) return;
        this.visible ? this.hide() : this.show();
      },
      initEvent() {
        const {handleClick} = this;
        this.triggerElm = this.$refs.reference;
        this.triggerElm.addEventListener('click', handleClick);
      },
      handleSelectOptionClick(value, instance) {
        this.visible = !this.hideAfterClick;
        this.displayValue = instance.label;
        this.$emit('input', value, instance);
        this.$emit('change', value, instance);
      },
    },
  };
</script>
