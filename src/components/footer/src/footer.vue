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
    },
    computed: {
      style() {
        const style = {};
        style.height = `${this.height}px`;
        return style;
      },
    },
  };
</script>
