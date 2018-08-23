<template>
  <div
    :class="classes"
    :style="style">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Row',
    inheritAttrs: false,
    props: {
      gutter: {
        type: Number,
        default: 0,
      },
      flex: {
        type: Boolean,
        default: false,
      },
      align: {
        type: String,
        default: 'start',
      },
      justify: {
        type: String,
        default: 'start',
      },
    },
    computed: {
      classes() {
        let classes = [];

        if (this.flex) {
          classes.push('v-row--flex');

          ['align', 'justify'].forEach(prop => {
            if (this[prop]) {
              classes.push(`v-row--flex-${prop}-${this[prop]}`);
            }
          });
        } else {
          classes.push('v-row');
        }

        return classes;
      },
      style() {
        const style = {};

        if (this.gutter) {
          style.marginLeft = `-${this.gutter / 2}px`;
          style.marginRight = style.marginLeft;
        }

        return style;
      },
    },
  };
</script>
