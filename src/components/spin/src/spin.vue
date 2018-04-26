<template>
  <div class="v-spin">
    <div class="v-spin--inner">
      <em class="v-spin--inner-dot">
        <i></i>
        <i></i>
        <i></i>
        <i></i>
      </em>
      <em class="v-spin--inner-tip">
        {{tip}}
      </em>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Spin',
    componentName: 'Spin',
    props: {
      tip: String,
    },
  };
</script>
