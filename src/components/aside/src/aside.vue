<template>
  <aside class="v-aside" :style="style">
    <slot></slot>
  </aside>
</template>
<script>
  export default {
    name: 'Aside',
    componentName: 'Aside',
    props: {
      width: {
        type: Number,
        default: 200,
      },
      float: {
        type: String,
        default: 'left',
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
