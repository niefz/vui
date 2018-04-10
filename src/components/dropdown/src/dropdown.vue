<template>
  <div
    class="v-dropdown"
    @mouseenter="mouseenter"
    @mouseleave="mouseleave"
    @click="handleClick"
    v-clickoutside="hide">
    <slot></slot>
    <template v-if="$slots.dropdown">
      <v-icon icon="v-icon-arrow-right" v-if="$parent.$options.name === 'DropdownMenuItem'"></v-icon>
      <slot name="dropdown"></slot>
    </template>
  </div>
</template>
<script>
  import Clickoutside from '@/directives/clickoutside';
  import Emitter from '@/mixins/emitter';
  import Icon from '@/components/icon';

  export default {
    name: 'Dropdown',
    componentName: 'Dropdown',
    directives: { Clickoutside },
    mixins: [Emitter],
    components: {
      VIcon: Icon,
    },
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
      handleMenuItemClick(value, event) {
        this.$emit('change', value);
        if (event.target.children.length) {
          this.broadcast('DropdownMenu', 'visible', this.visible);
        }
        if (this.showAfterClick) return;
        this.hide();
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
        this.visible ? !this.showAfterClick && this.hide() : this.show();
      },
    },
    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
    },
  };
</script>
