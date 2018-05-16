<template>
  <div
    class="v-upload"
    :class="[
      {
        ['disabled']: isDisabled
      }
    ]"
  >
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Upload',
    componentName: 'Upload',
    components: {
      Icon,
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
      };
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
