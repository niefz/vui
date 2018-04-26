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
        <v-icon class="v-empty--inner-icon" :icon="icon"></v-icon>
      </template>
      <template v-if="tip || $slots.default">
        <p class="v-empty--inner-tip">
          <slot>{{tip}}</slot>
        </p>
      </template>
    </div>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Empty',
    componentName: 'Empty',
    components: {
      VIcon: Icon,
    },
    props: {
      icon: String,
      src: String,
      tip: String,
      fill: Boolean,
    },
  };
</script>
