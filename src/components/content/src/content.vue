<template>
  <main class="v-content" :style="style">
    <slot></slot>
  </main>
</template>
<script>
  export default {
    name: 'Content',
    componentName: 'Content',
    props: {},
    computed: {
      style() {
        const style = {};
        let parent = this.$parent;
        if (parent.$options.name === 'Layout') {
          const aside = parent.$children.find(vnode => vnode.$options.name === 'Aside');
          if(aside) style.marginLeft = `${aside.width}px`;
        }
        return style;
      },
    },
    methods: {},
  };
</script>
