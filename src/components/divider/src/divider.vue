<template>
  <div
    :class="classNames">
    <span class="v-divider__inner-text" v-if="$slots.default"><slot></slot></span>
  </div>
</template>
<script>
  export default {
    name: 'VDivider',
    componentName: 'VDivider',
    props: {
      mode: {
        type: String,
        default: 'horizontal',
      },
      dashed: {
        type: Boolean,
        default: false,
      },
      align: {
        type: String,
        default: 'center',
      },
    },
    computed: {
      classNames() {
        return [
          `v-divider__${this.mode}`,
          {
            ['v-divider__width-text']: this.$slots.default,
            ['v-divider__dashed']: this.dashed,
          },
          `${this.align}`,
        ];
      },
    },
  };
</script>
