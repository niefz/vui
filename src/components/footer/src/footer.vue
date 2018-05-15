<template>
  <footer class="v-footer" :style="style">
    <slot></slot>
  </footer>
</template>
<script>
  export default {
    name: 'Footer',
    componentName: 'Footer',
    props: {
      height: {
        type: Number,
        default: 64,
      },
      padding: {
        type: Number,
        default: 48,
      },
      lineHeight: Number,
    },
    computed: {
      style() {
        const style = {};
        style.height = `${this.height}px`;
        style.padding = `0 ${this.padding}px`;
        return style;
      },
    },
    methods: {},
  };
</script>
