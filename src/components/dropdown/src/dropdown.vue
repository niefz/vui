<template>
  <div
    class="v-dropdown"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @click="handleClick"
    v-clickoutside="hide">
    <slot></slot>
    <template v-if="$slots.dropdown">
      <slot name="dropdown"></slot>
    </template>
  </div>
</template>
<script>
  import Clickoutside from 'free-vui/src/directives/clickoutside';
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'Dropdown',
    componentName: 'Dropdown',
    directives: { Clickoutside },
    mixins: [Emitter],
    props: {
      trigger: {
        type: String,
        default: 'hover',
      },
      showTimeout: {
        type: Number,
        default: 150,
      },
      hideTimeout: {
        type: Number,
        default: 150,
      },
      showAfterClick: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        visible: false,
      };
    },
    watch: {
      visible(val) {
        this.broadcast('DropdownMenu', 'visible', val);
      },
    },
    methods: {
      show() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, this.trigger === 'click' ? 0 : this.hideTimeout);
      },
      hide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, this.trigger === 'click' ? 0 : this.hideTimeout);
      },
      mouseenter() {
        if (this.trigger !== 'hover') return;
        this.show();
      },
      mouseleave() {
        if (this.trigger !== 'hover') return;
        this.hide();
      },
      handleClick(event) {
        if (this.trigger !== 'click') return;
        event.stopPropagation();
        this.visible ? !this.showAfterClick && this.hide() : this.show();
      },
      handleMenuItemClick(value, event) {
        this.$emit('change', value);
        if (event.target.children.length) {
          this.broadcast('DropdownMenu', 'visible', this.visible);
        }
        if (this.showAfterClick) return;
        this.hide();
      },
    },
    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
    },
  };
</script>
