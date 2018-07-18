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
      <Icon :icon="icon"></Icon>
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
    components: {
      Icon,
    },
    inheritAttrs: false,
    props: {
      size: {
        type: String,
        default: 'small',
      },
      shape: {
        type: String,
        default: 'square',
      },
      icon: {
        type: String,
      },
      src: {
        type: String,
      },
      alt: {
        type: String,
      },
    },
  };
</script>