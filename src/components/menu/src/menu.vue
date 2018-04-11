<template>
  <ul
    class="v-menu"
    :class="[
      'v-menu-' + mode,
    ]"
    role="menu">
    <slot></slot>
  </ul>
</template>
<script>
  export default {
    name: 'Menu',
    componentName: 'Menu',
    props: {
      mode: {
        type: String,
        default: 'vertical',
      },
    },
  };
</script>
