<template>
  <header class="v-header" :style="style">
    <slot></slot>
  </header>
</template>
<script>
  export default {
    name: 'Header',
    componentName: 'Header',
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
        style.lineHeight = `${this.lineHeight || this.height}px`;
        return style;
      },
    },
    methods: {},
  };
</script>
