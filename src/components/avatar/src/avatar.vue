<template>
  <div
    class="v-avatar"
    :class="[
      'v-avatar--' + size,
      'v-avatar--' + shape,
    ]">
    <template v-if="src">
      <img :src="src" :alt="alt"/>
    </template>
    <template v-else-if="icon">
      <v-icon :icon="icon"></v-icon>
    </template>
    <template v-else="$slots.default">
      <em class="v-avatar--inner"><slot></slot></em>
    </template>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Avatar',
    componentName: 'Avatar',
    components: {
      VIcon: Icon,
    },
    props: {
      icon: {
        type: String,
        default: '',
      },
      src: {
        type: String,
        default: '',
      },
      alt: {
        type: String,
        default: '',
      },
      size: {
        type: String,
        default: 'small',
      },
      shape: {
        type: String,
        default: 'radius',
      },
    },
    computed: {},
  };
</script>