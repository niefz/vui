<template>
  <transition :name="transitionName">
    <span
      :class="[
        'v-tag',
        'v-tag--' + theme,
        'v-tag--' + tagSize,
        {
          ['v-tag--custom']: borderColor || backgroundColor,
          ['checked']: isChecked,
        }
      ]"
      :style="{
        borderColor: borderColor,
        backgroundColor: backgroundColor
      }"
      @click.stop="handleChange(value)">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>{{ value }}</template>
      <Icon
        class="v-tag--close"
        icon="v-icon-close-o"
        @click.stop="handleClose"
        v-if="closable"></Icon>
    </span>
  </transition>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Tag',
    componentName: 'Tag',
    inheritAttrs: false,
    mixins: [Emitter],
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
      borderColor: {
        type: String,
        default: '',
      },
      backgroundColor: {
        type: String,
        default: '',
      },
      closable: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      isGroup() {
        let parent = this.$parent;
        if (parent) {
          if (parent.$options.componentName !== 'TagGroup') {
            parent = parent.$parent;
          } else {
            this._tagGroup = parent;
            return true;
          }
        }
        return false;
      },
      model() {
        return this.isGroup ? this._tagGroup.value : this.value;
      },
      multiple() {
        return this.isGroup && this._tagGroup.multiple;
      },
      tagSize() {
        return this.size || (this.$VUI || {}).size;
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
        this.$emit('close', this.value, event);
      },
      handleChange(val) {
        if (this.isGroup) {
          let model = this.model;
          if (this.multiple) {
            const index = model.findIndex(item => item === val);
            if (index > -1) {
              model.splice(index, 1);
            } else {
              model.push(val);
            }
          } else {
            model = val;
          }
          this.dispatch('TagGroup', 'input', [model]);
        }
      },
    },
  };
</script>
