<template>
  <transition :name="transitionName">
    <span
      :class="[
        'v-tag',
        'v-tag--' + theme,
        'v-tag--' + tagSize,
        {
          ['v-tag--custom']: color,
          ['checked']: isChecked,
        }
      ]"
      :style="{
        backgroundColor: color
      }"
      @click.stop="handleChange(value)">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{value}}</template>
      <Icon
        class="v-tag--close"
        icon="v-icon-close-o"
        @click.stop="handleClose"
        v-if="closable"></Icon>
    </span>
  </transition>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Tag',
    componentName: 'Tag',
    components: {
      Icon,
    },
    props: {
      transitionName: {
        type: String,
        default: 'zoom-in-center',
      },
      value: [String, Object],
      theme: {
        type: String,
        default: 'default',
      },
      size: {
        type: String,
        default: 'small',
      },
      color: {
        type: String,
        default: '',
      },
      closable: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      tagSize() {
        return this.size || (this.$VUI || {}).size;
      },
      parent() {
        let parent = this.$parent;

        if (parent && parent.$options.componentName !== 'TagGroup') {
          parent = parent.$parent;
        }

        return parent;
      },
      model() {
        return this.parent && this.parent.value;
      },
      multiple() {
        return this.parent && this.parent.multiple;
      },
      isChecked() {
        if (this.multiple) {
          return this.model.includes(this.value);
        }
        return this.value === this.model;
      },
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      },
      handleChange(val) {
        if (this.multiple) {
          const model = this.model;
          const index = model.findIndex(item => item === val);
          if (index > -1) {
            model.splice(index, 1);
          } else {
            model.push(val);
          }
          this.$emit('change', model);
        } else {
          this.$emit('change', val);
        }
      },
    },
  };
</script>
