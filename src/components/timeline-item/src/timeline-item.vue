<template>
  <li class="v-timeline-item">
    <span 
      class="v-timeline-item__head"
      :style="style"
    >
    </span>
    <div class="v-timeline-item__content">
      <slot></slot>
    </div>
    <span class="v-timeline-item__foot"></span>
  </li>
</template>
<script>
  export default {
    name: 'TimelineItem',
    componentName: 'TimelineItem',
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
    methods: {
    },
    created() {
    },
    mounted() {
    },
  };
</script>