<template>
  <section class="v-layout" :style="style">
    <slot></slot>
  </section>
</template>
<script>
  export default {
    name: 'Layout',
    componentName: 'Layout',
    props: {},
    data() {
      return {};
    },
    computed: {
      style() {
        const style = {};
        let parent = this.$parent;
        if (parent.$options.name === 'Layout') {
          const aside = parent.$children.find(vnode => vnode.$options.name === 'Aside');
          if (aside) style.marginLeft = `${aside.width}px`;
        }
        return style;
      },
    },
    methods: {},
  };
</script>
