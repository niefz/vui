<template>
  <div 
    class="v-anchor--inner"
    :class="[
      {
        ['active']: title === anchor.active,
        ['disabled']: disabled,
      }
    ]">
    <a :href="href" @click="handleClick">{{title}}</a>
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'AnchorLink',
    componentName: 'AnchorLink',
    mixins: [Emitter],
    inject: ['anchor'],
    props: {
      href: String,
      title: String,
      disabled: Boolean,
    },
    methods: {
      handleClick() {
        if (this.disabled)  return;
        this.dispatch('Anchor', 'anchor-link-click', [this]);
      },
    },
    mounted() {
      this.anchor.addLinks(this);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.anchor.removeLinks(this);
    },
  };
</script>