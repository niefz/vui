<template>
  <div
    class="v-dropdown"
    v-clickoutside="hide">
    <slot></slot>
    <slot name="dropdown"></slot>
  </div>
</template>
<script>
  import Clickoutside from 'free-vui/src/directives/clickoutside';
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'Dropdown',
    provide() {
      return {
        dropdown: this,
      };
    },
    directives: { Clickoutside },
    mixins: [Emitter],
    inheritAttrs: false,
    props: {
      trigger: {
        type: String,
        default: 'hover',
      },
      placement: {
        type: String,
        default: 'bottom-start',
      },
      showTimeout: {
        type: Number,
        default: 150,
      },
      hideTimeout: {
        type: Number,
        default: 150,
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
      };
    },
    computed: {
      dropdownSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
    watch: {
      visible: {
        handler(val) {
          this.broadcast('DropdownMenu', 'visible', val);
          this.$emit('visible-change', val);
        },
      },
    },
    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
      this.initEvent();
    },
    methods: {
      show() {
        if (this.triggerElm.disabled) return;
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.trigger === 'click' ? 0 : this.showTimeout);
      },
      hide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, this.trigger === 'click' ? 0 : this.hideTimeout);
      },
      handleClick() {
        if (this.triggerElm.disabled) return;
        this.visible ? this.hide() : this.show();
      },
      initEvent() {
        const { trigger, show, hide, handleClick } = this;
        this.triggerElm = this.$slots.default[0].elm;
        this.dropdownElm = this.$slots.dropdown[0].elm;
        if (trigger === 'hover') {
          this.triggerElm.addEventListener('mouseenter', show);
          this.triggerElm.addEventListener('mouseleave', hide);
          this.dropdownElm.addEventListener('mouseenter', show);
          this.dropdownElm.addEventListener('mouseleave', hide);
        } else if (trigger === 'click') {
          this.triggerElm.addEventListener('click', handleClick);
        }
      },
      handleMenuItemClick(value, instance) {
        this.visible = !this.hideAfterClick;
        this.$emit('change', value, instance);
      },
    },
  };
</script>
