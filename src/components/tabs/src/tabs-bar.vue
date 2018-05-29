<template>
  <div class="v-tabs--nav-bar" :style="barStyle"></div>
</template>
<script>
  export default {
    name: 'TabsBar',
    componentName: 'TabsBar',
    inject: ['tabs'],
    props: {
      navs: Array,
    },
    computed: {
      barStyle: {
        cache: false,
        get() {
          let style = {};
          const sizeName = ['top', 'bottom'].includes(this.tabs.placement) ? 'width' : 'height';
          const sizeDir = sizeName === 'width' ? 'x' : 'y';
          const offsetDir = sizeName === 'width' ? 'left' : 'top';
          const firstUpperCase = (str) => {
            return str.toLowerCase().replace(/( |^)[a-z]/g, (L) => L.toUpperCase());
          };
          const tab = this.navs.find(tab => tab.name === this.tabs.currentName);
          if (!tab) return;
          const el = tab.$el;
          const tabSize = el[`client${firstUpperCase(sizeName)}`];
          const offset = el[`offset${firstUpperCase(offsetDir)}`];
          const transform = `translate${sizeDir}(${offset}px)`;
          style[sizeName] = tabSize + 'px';
          style.transform = transform;
          style.msTransform = transform;
          style.webkitTransform = transform;
          return style;
        },
      },
    },
  };
</script>
