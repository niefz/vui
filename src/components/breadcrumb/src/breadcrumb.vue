<template>
  <div
    class="v-breadcrumb"
    aria-label="v-breadcrumb"
    role="navigation">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Breadcrumb',
    componentName: 'Breadcrumb',
    inheritAttrs: false,
    provide() {
      return {
        breadcrumb: this,
      };
    },
    props: {
      separator: {
        type: String,
        default: '/',
      },
      separatorIcon: {
        type: String,
        default: '',
      },
    },
  };
</script>
