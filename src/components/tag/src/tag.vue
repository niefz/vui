<template>
  <transition :name="transitionName">
    <span
      :class="[
        'v-tag',
        'v-tag__' + theme,
        'v-tag__' + tagSize,
        {
          ['hit']: hit,
        },
      ]"
      :style="{ backgroundColor: color }">
      <slot></slot>
      <v-icon
        class="v-tag__close"
        icon="v-icon-close"
        @click.stop="handleClose"
        v-if="closable"></v-icon>
    </span>
  </transition>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'VTag',
    componentName: 'VTag',
    components: {
      VIcon: Icon,
    },
    props: {
      transitionName: {
        type: String,
        default: 'v-zoom-in-center',
      },
      theme: {
        type: String,
        default: 'default',
      },
      size: {
        type: String,
        default: 'small',
      },
      closable: {
        type: Boolean,
        default: false,
      },
      hit: {
        type: Boolean,
        default: false,
      },
      color: {
        type: String,
        default: '',
      },
    },
    computed: {
      tagSize() {
        return this.size || (this.$VUI || {}).size;
      },
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    },
  };
</script>
