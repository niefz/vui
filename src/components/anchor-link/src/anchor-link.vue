<template>
  <div class="v-anchor--item">
    <div
      class="v-anchor--item-inner"
      :class="[
        {
          ['active']: active,
          ['disabled']: disabled,
        }
      ]">
      <a :href="href" @click="handleClick">{{title}}</a>
    </div>
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
    computed: {
      active() {
        return this.anchor.active === this.href;
      },
    },
    methods: {
      handleClick(event) {
        if (this.disabled)  return;
        this.dispatch('Anchor', 'anchor-item-click', [this, event]);
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