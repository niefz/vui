<template>
  <div class="v-card">
    <div class="v-card__header" v-if="$slots.header || header">
      <slot name="header">
        {{header}}
      </slot>
    </div>
    <div class="v-card__body">
      <slot></slot>
    </div>
    <div class="v-card__footer" v-if="$slots.footer || footer">
      <slot name="footer">
        {{footer}}
      </slot>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Card',
    componentName: 'Card',
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
    methods: {},
    created() {
    },
    mounted() {
    },
  };
</script>