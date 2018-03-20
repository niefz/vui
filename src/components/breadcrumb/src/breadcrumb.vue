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
    name: 'VBreadcrumb',
    componentName: 'VBreadcrumb',
    props: {
      separator: {
        type: String,
        default: '/'
      },
      separatorIcon: {
        type: String,
        default: ''
      }
    },
    provide() {
      return {
        VBreadcrumb: this
      };
    },
  };
</script>
