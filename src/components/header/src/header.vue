<template>
  <header
    class="v-header">
    <slot></slot>
  </header>
</template>
<script>
  export default {
    name: 'Header',
    inheritAttrs: false,
  };
</script>
