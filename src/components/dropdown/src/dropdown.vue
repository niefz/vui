<template>
  <div
    class="v-dropdown"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @click="handleClick"
    v-clickoutside="hide">
    <slot></slot>
    <slot name="dropdown"></slot>
  </div>
</template>
<script>
  import Clickoutside from '@/directives/clickoutside';
  import Emitter from '@/mixins/emitter';

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
        default: 250,
      },
      hideTimeout: {
        type: Number,
        default: 150,
      },
      hideOnClick: {
        type: Boolean,
        default: true,
      },
      showArrow: {
        type: Boolean,
        default: true
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
      handleMenuItemClick(value) {
        this.$emit('change', value);
      },
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
      handleClick() {
        if (this.trigger !== 'click') return;
        this.visible ? this.hide() : this.show();
      },
    },
    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
    },
  };
</script>
