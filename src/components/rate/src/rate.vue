<template>
  <div class="v-rate">
    <span
      v-for="item in points"
      class="v-rate__item"
    >
      <slot>
         <v-icon icon="v-icon-delete"></v-icon>
      </slot>
    </span>
  </div>
</template>
<script>
  export default {
    name: 'Rate',
    componentName: 'Rate',
    props: {
      value: {
        type: Number,
        default: 0,
      },
      points: {
        type: Number,
        default: 5,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      allowHalfPoints: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {};
    },
    computed: {
      isDisabled() {
        return this.disabled;
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