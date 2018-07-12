<template>
  <li class="v-timeline-item">
    <slot name="itemIcon">
      <span 
        class="v-timeline-item--head"
        :style="style"
      >
      </span>
    </slot>
    <div class="v-timeline-item--content">
      <slot></slot>
    </div>
    <span class="v-timeline-item--foot"></span>
  </li>
</template>
<script>
  export default {
    name: 'TimelineItem',
    inheritAttrs: false,
    props: {
      color: {
        type: String
      },
    },
    data() {
      return {};
    },
    computed: {
      style() {
        return this.color ? {
          'border-color': this.color
        } : {};
      },
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    },
  };
</script>