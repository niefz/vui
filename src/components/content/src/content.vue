<template>
  <main
    class="v-content"
    :style="style">
    <slot></slot>
  </main>
</template>
<script>
  export default {
    name: 'Content',
    inheritAttrs: false,
    computed: {
      style() {
        const style = {};
        let parent = this.$parent;
        if (parent.$options.name === 'Layout') {
          const aside = parent.$children.find(child => child.$options.name === 'Aside');
          if (aside) {
            if (aside.float === 'left') {
              style.marginLeft = `${aside.width}px`;
            } else {
              style.marginRight = `${aside.width}px`;
            }
          }
        }
        return style;
      },
    },
  };
</script>
