<template>
  <aside class="v-aside" :style="style">
    <slot></slot>
  </aside>
</template>
<script>
  export default {
    name: 'Aside',
    inheritAttrs: false,
    props: {
      float: {
        type: String,
        default: 'left',
      },
      width: {
        type: Number,
        default: 200,
      },
    },
    computed: {
      style() {
        const style = {};
        style.float = this.float;
        style.width = `${this.width}px`;
        return style;
      },
    },
  };
</script>
