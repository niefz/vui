<template>
  <div class="v-badge">
    <transition name="zoom-in-center">
      <sup
        :class="[
          {
            ['v-badge--content']: !dot && !status,
            ['v-badge--dot']: dot,
            ['v-badge--status-dot']: status,
            [`v-badge--${status}`]: status,
            ['fixed']: $slots.default,
          }
        ]"
        v-text="content">
      </sup>
    </transition>
    <slot></slot>
    {{ text }}
  </div>
</template>
<script>
  export default {
    name: 'Badge',
    inheritAttrs: false,
    props: {
      value: {},
      max: Number,
      dot: Boolean,
      status: String,
      text: String,
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
