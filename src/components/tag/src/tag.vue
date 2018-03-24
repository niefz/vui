<template>
  <transition :name="transitionName">
    <span
      :class="[
        'v-tag',
        'v-tag__' + theme,
        'v-tag__' + tagSize,
        {
          ['v-tag__custom']: color,
        },
      ]"
      :style="{ backgroundColor: color }">
      <slot></slot>
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
      value: [String, Array],
      transitionName: {
        type: String,
        default: 'v-zoom-in-center',
      },
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
      model() {
        let parent = this.$parent;

        if (parent && parent.$options.componentName !== 'TagGroup') {
          parent = parent.$parent;
        }

        return parent && parent.value;
      },
    },
    methods: {
      handleClose(event) {
        this.$emit('close', event);
      }
    },
    created() {
      console.log(this.model);
    },
  };
</script>
