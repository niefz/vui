<template>
  <em class="v-anchor--ink-ball" :style="style" v-show="visible"></em>
</template>
<script>
  export default {
    name: 'AnchorBar',
    componentName: 'AnchorBar',
    inject: ['anchor'],
    props: {
      links: Array,
    },
    computed: {
      style: {
        cache: false,
        get() {
          let style = {};
          const link = this.links.find(link => link.href === this.anchor.active);
          if (!link) return;
          const el = link.$el;
          const offset = el.offsetTop;
          const transform = `translateY(${offset}px)`;
          style.transform = transform;
          style.msTransform = transform;
          style.webkitTransform = transform;
          return style;
        },
      },
      visible() {
        return this.anchor.active;
      },
    },
  };
</script>