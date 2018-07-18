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
    provide() {
      return {
        breadcrumb: this,
      };
    },
    inheritAttrs: false,
    props: {
      separator: {
        type: String,
        default: '/',
      },
      separatorIcon: {
        type: String,
      },
    },
  };
</script>
