<template>
  <div class="v-card">
    <div class="v-card--header" v-if="$slots.header || header">
      <slot name="header">
        {{ header }}
      </slot>
    </div>
    <div class="v-card--body">
      <slot></slot>
    </div>
    <div class="v-card--footer" v-if="$slots.footer || footer">
      <slot name="footer">
        {{ footer }}
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    inheritAttrs: false,
    props: {
      header: {
        type: String,
      },
      footer: {
        type: String,
      },
    },
    data() {
      return {};
    },
    computed: {},
    watch: {},
    created() {
    },
    mounted() {
    },
    methods: {},
  };
</script>