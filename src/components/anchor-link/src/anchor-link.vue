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
      <template v-if="disabled">{{title}}</template>
      <template v-else>
        <a :href="href" @click="handleClick">{{title}}</a>
      </template>
    </div>
    <slot></slot>
  </div>
</template>
<script>
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'AnchorLink',
    inject: ['anchor'],
    mixins: [Emitter],
    inheritAttrs: false,
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
    mounted() {
      this.anchor.addLinks(this);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.anchor.removeLinks(this);
    },
    methods: {
      handleClick(event) {
        if (this.disabled)  return;
        this.dispatch('Anchor', 'anchor-item-click', [this, event]);
      },
    },
  };
</script>