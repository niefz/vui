<template>
  <div class="v-dropdown">

  </div>
</template>
<script>
  import Clickoutside from '@/utils/clickoutside';
  import Emitter from '@/mixins/emitter';
  import Migrating from '@/mixins/migrating';

  export default {
    name: 'Dropdown',
    componentName: 'Dropdown',
    mixins: [Emitter, Migrating],
    directives: { Clickoutside },
    provide() {
      return {
        dropdown: this,
      };
    },
    props: {
      trigger: {
        type: String,
        default: 'hover',
      },
      theme: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: 'small',
      },
      placement: {
        type: String,
        default: 'bottom-end'
      },
      showTimeout: {
        type: Number,
        default: 250,
      },
      hideTimeout: {
        type: Number,
        default: 150,
      },
      splitButton: {
        type: Boolean,
        default: false,
      },
      hideOnClick: {
        type: Boolean,
        default: true,
      },
      visibleArrow: {
        type: Boolean,
        default: true
      },
    },
    data() {
      return {
        visible: false,
        menuItems: null,
        menuItemsArray: null,
        triggerElement: null,
        dropdownElement: null,
        timeout: null,
      };
    },
    computed: {
      dropdownSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
    watch: {
      visible(val) {
        this.broadcast('DropdownMenu', 'visible', val);
        this.$emit('visible-change', val);
      },
    },
    methods: {

    },
    mounted() {
      this.$on('menu-item-click', this.handleMenuItemClick);
      this.initEvent();
      this.initAria();
    },
  };
</script>
