<template>
  <div
    class="v-empty"
    :class="[
      {
        ['v-empty--fill']: fill,
      }
    ]">
    <div class="v-empty--inner">
      <template v-if="src">
        <img class="v-empty--inner-img" :src="src" alt="">
      </template>
      <template v-else-if="icon">
        <Icon class="v-empty--inner-icon" :icon="icon" :fontSize="fontSize"></Icon>
      </template>
      <template v-if="description || $slots.default">
        <p class="v-empty--inner-desc">
          <slot>{{ description }}</slot>
        </p>
      </template>
    </div>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Empty',
    components: {
      Icon,
    },
    inheritAttrs: false,
    props: {
      src: String,
      icon: String,
      fontSize: Number,
      description: String,
      fill: Boolean,
    },
  };
</script>
