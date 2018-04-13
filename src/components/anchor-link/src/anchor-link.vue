<template>
  <div class="v-anchor--inner">
    <a :href="href">{{title}}</a>
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'AnchorLink',
    componentName: 'AnchorLink',
    props: {
      href: String,
      title: String,
    },
  };
</script>