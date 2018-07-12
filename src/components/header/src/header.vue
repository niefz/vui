<template>
  <header class="v-header" :style="style">
    <slot></slot>
  </header>
</template>
<script>
  export default {
    name: 'Header',
    inheritAttrs: false,
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
