<template>
  <section class="v-layout" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>
<script>
  export default {
    name: 'Layout',
    componentName: 'Layout',
    props: {
      direction: String
    },
    computed: {
      isVertical() {
        if (this.direction === 'vertical') {
          return true;
        } else if (this.direction === 'horizontal') {
          return false;
        }
        return this.$slots && this.$slots.default
          ? this.$slots.default.some(vnode => {
            const tag = vnode.componentOptions && vnode.componentOptions.tag;
            return tag === 'Header' || tag === 'Footer';
          }) : false;
      },
    },
    methods: {},
  };
</script>
