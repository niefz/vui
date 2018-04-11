<template>
  <div
    class="v-select"
    @click="handleClick">
    <v-input
      v-model="selectedLabel"
      :placeholder="placeholder || '请选择'"
      suffix-icon="v-icon-arrow-down"
      readonly></v-input>
      <slot></slot>
  </div>
</template>
<script>
  import Clickoutside from '@/directives/clickoutside';
  import Emitter from '@/mixins/emitter';
  import Input from '@/components/input';

  export default {
    name: 'Select',
    componentName: 'Select',
    directives: { Clickoutside },
    mixins: [Emitter],
    components: {
      VInput: Input,
    },
    provide() {
      return {
        select: this,
      };
    },
    props: {
      placeholder: {
        type: String,
        default: '',
      },
      value: {},
    },
    data() {
      return {
        visible: false,
        selectedLabel: '',
      };
    },
    watch: {
      visible(val) {
        this.broadcast('SelectMenu', 'visible', val);
      },
    },
    methods: {
      show() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = true;
        }, 0);
      },
      hide() {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          this.visible = false;
        }, 0);
      },
      handleClick(event) {
        event.stopPropagation();
        this.visible ? this.hide() : this.show();
      },
      handleSelectOptionClick(value) {
        console.log(value);
        this.selectedLabel = value;
        this.$emit('change', value);
        this.hide();
      },
    },
    mounted() {
      this.$on('select-option-click', this.handleSelectOptionClick);
    },
  };
</script>
