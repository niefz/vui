<template>
  <div
    role="tablist"
    class="v-collapse"
    :class="[
      `v-collapse--${theme}`
    ]"
    aria-multiselectable="true">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Collapse',
    componentName: 'Collapse',
    provide() {
      return {
        collapse: this,
      };
    },
    props: {
      value: {
        type: [Array, String],
        default() {
          () => [];
        },
      },
      defaultActive: {
        type: String,
        default: '',
      },
      theme: {
        type: String,
        default: 'simple',
      },
      showArrow: {
        type: Boolean,
        default: true,
      },
      accordion: Boolean,
    },
    data() {
      return {
        activeNames: null,
      };
    },
    methods: {
      setCurrentActives(names) {
        this.activeNames = names;
        this.$emit('input', names);
      },
      handleItemClick(item) {
        let activeNames = this.activeNames;
        if (this.accordion) {
          activeNames = activeNames === item.name ? null : item.name;
        } else {
          const index = activeNames.indexOf(item.name);
          if (index > -1) {
            activeNames.splice(index, 1);
          } else {
            activeNames.push(item.name);
          }
        }
        this.setCurrentActives(activeNames);
        this.$emit('change', activeNames);
      },
    },
    created() {
      const defaultActive = this.defaultActive || this.value;
      const activeNames = this.accordion ? defaultActive : [].concat(defaultActive);
      this.setCurrentActives(activeNames);
      this.$on('panel-click', this.handleItemClick);
    },
  };
</script>
