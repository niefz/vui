<template>
  <div class="v-rate">
    <span
      v-for="item in points"
      class="v-rate__item"
    >
      <slot></slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'Rate',
    componentName: 'Rate',
    props: {
      points: {
        type: Number,
        default: 5,
      },
    },
    data() {
      return {};
    },
    computed: {
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