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
    },
    computed: {
      style() {
        const style = {};
        style.width = `${this.width}px`;
        return style;
      },
    },
    methods: {},
  };
</script>
