<template>
  <div
    :class="classes"
    :style="style">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'Col',
    componentName: 'Col',
    props: {
      span: {
        type: Number,
        default: 24,
      },
      offset: {
        type: Number,
        default: 0,
      },
      pull: {
        type: Number,
        default: 0,
      },
      push: {
        type: Number,
        default: 0,
      },
      xs: [Number, Object],
      sm: [Number, Object],
      md: [Number, Object],
      lg: [Number, Object],
      xl: [Number, Object],
    },
    computed: {
      classes() {
        let classes = [];

        ['span', 'offset', 'pull', 'push'].forEach(prop => {
          if (this[prop]) {
            classes.push(
              prop === 'span' ? `v-col-${this[prop]}` : `v-col-${prop}-${this[prop]}`
            );
          }
        });

        ['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
          if (typeof this[size] === 'number') {
            classes.push(`v-col-${size}-${this[size]}`);
          } else if (typeof this[size] === 'object') {
            let props = this[size];
            Object.keys(props).forEach(prop => {
              classes.push(
                prop === 'span' ? `v-col-${size}-${props[prop]}` : `v-col-${size}-${prop}-${props[prop]}`
              );
            });
          }
        });

        return classes;
      },
      parent() {
        let parent = this.$parent;

        if (parent && parent.$options.componentName !== 'Row') {
          parent = parent.$parent;
        }

        return parent;
      },
      gutter() {
        return this.parent ? this.parent.gutter : 0;
      },
      style() {
        const style = {};

        if (this.gutter) {
          style.paddingLeft = `${this.gutter / 2}px`;
          style.paddingRight = style.paddingLeft;
        }

        return style;
      },
    },
  };
</script>
