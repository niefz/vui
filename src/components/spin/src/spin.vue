<template>
  <div class="v-spin">
    <div class="v-spin--mask" :style="{ backgroundColor: background }"></div>
    <div class="v-spin--inner">
      <template v-if="icon">
        <Icon class="v-spin--inner-icon" :icon="icon"></Icon>
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
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Spin',
    components: {
      Icon,
    },
    inheritAttrs: false,
    props: {
      tip: {
        type: String,
      },
      icon: {
        type: String,
      },
      background: {
        type: String,
      },
    },
  };
</script>
