<template>
  <div
    class="v-select"
    v-clickoutside="hide">
    <Input
      ref="reference"
      role="reference"
      v-model="displayValue"
      :placeholder="displayPlaceholder"
      suffix-icon="v-icon-caret-down"
      readonly/>
    <slot></slot>
  </div>
</template>
<script>
  import Clickoutside from 'free-vui/src/directives/clickoutside';
  import Emitter from 'free-vui/src/mixins/emitter';
  import Input from 'free-vui/src/components/input';

  export default {
    name: 'Select',
    componentName: 'Select',
    inheritAttrs: false,
    directives: { Clickoutside },
    mixins: [Emitter],
    components: {
      Input,
    },
    provide() {
      return {
        select: this,
      };
    },
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
        this.triggerElm = this.$refs.reference.$vnode.elm;
        this.triggerElm.addEventListener('click', handleClick);
      },
      handleSelectOptionClick(value, instance) {
        this.visible = !this.hideAfterClick;
        this.displayValue = instance.label;
        this.$emit('input', value, instance);
        this.$emit('change', value, instance);
      },
    },
    mounted() {
      this.$on('select-option-click', this.handleSelectOptionClick);
      this.initEvent();
    },
  };
</script>
