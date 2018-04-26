<template>
  <div class="v-spin">
    <div class="v-spin--inner">
      <template v-if="icon">
        <v-icon class="v-spin--inner-icon" :icon="icon"></v-icon>
      </template>
      <template v-else>
        <em class="v-spin--inner-dot">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
        </em>
      </template>
      <em class="v-spin--inner-tip">
        {{tip}}
      </em>
    </div>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Spin',
    componentName: 'Spin',
    components: {
      VIcon: Icon,
    },
    props: {
      tip: String,
      icon: String,
    },
  };
</script>
