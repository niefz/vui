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
    provide() {
      return {
        Breadcrumb: this,
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
