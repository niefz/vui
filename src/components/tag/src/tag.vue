<template>
  <transition :name="transitionName">
    <span
      :class="[
        'v-tag',
        'v-tag__' + theme,
        'v-tag__' + tagSize,
        {
          ['v-tag__custom']: color,
          ['checked']: isChecked,
        },
      ]"
      :style="{ backgroundColor: color }"
      @click.stop="handleChange(value)">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{value}}</template>
      <v-icon
        class="v-tag__close"
        icon="v-icon-close"
        @click.stop="handleClose"
        v-if="closable"></v-icon>
    </span>
  </transition>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Tag',
    componentName: 'Tag',
    components: {
      VIcon: Icon,
    },
    props: {
      transitionName: {
        type: String,
        default: 'v-zoom-in-center',
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
