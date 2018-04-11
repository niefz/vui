<template>
  <div class="v-badge">
    <slot></slot>
    <transition name="v-zoom-in-center">
      <sup
        class="v-badge--content"
        :class="[
          {
          'fixed': $slots.default,
          'dot': dot,
          }
        ]"
        v-text="content">
      </sup>
    </transition>
  </div>
</template>
<script>
  export default {
    name: 'Badge',
    componentName: 'Badge',
    props: {
      value: {},
      max: Number,
      dot: Boolean,
    },
    computed: {
      content() {
        if (this.dot) return;
        const max = this.max;
        const value = this.value;
        if (typeof value === 'number' && typeof max === 'number') {
          return max < value ? `${max}+` : value;
        }
        return value;
      },
    },
  };
</script>
