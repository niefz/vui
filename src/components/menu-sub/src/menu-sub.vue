<template>
  <li
    class="v-menu--sub"
    :class="[
      {
        ['disabled']: disabled,
        ['expand']: expand,
      }
    ]"
    aria-haspopup="true"
    aria-expanded="true"
    role="menuitem">
    <template>
      <div class="v-menu--sub-title" :style="style" @click="handleToggle">
        <h4>
          <slot name="title"></slot>
        </h4>
        <i class="v-menu--sub-arrow"></i>
      </div>
      <v-collapse-transition>
        <ul class="v-menu--sub-menu" v-show="expand">
          <slot></slot>
        </ul>
      </v-collapse-transition>
    </template>
  </li>
</template>
<script>
  import CollapseTransition from '@/components/collapse-transition';
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'MenuSub',
    componentName: 'MenuSub',
    mixins: [Emitter],
    inject: ['menu'],
    components: {
      VCollapseTransition: CollapseTransition,
    },
    props: {
      index: String,
      disabled: Boolean,
    },
    data() {
      return {
        expand: false,
      };
    },
    computed: {
      style() {
        const height = this.menu.height;
        let style = {};
        let indent = this.menu.indent;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'Menu') {
          if (parent.$options.componentName === 'MenuSub') {
            indent += 20;
          }
          parent = parent.$parent;
        }
        style.paddingLeft = `${indent}px`;
        style.lineHeight = `${height}px`;
        return style;
      },
    },
    watch: {
      'menu.defaultOpens'(val) {
        this.expand = val.indexOf(this.index) > -1;
      },
    },
    methods: {
      handleToggle() {
        this.expand = !this.expand;
      },
    },
    created() {
      this.menu.addMenuSub(this);
    },
    beforeDestroy() {
      this.menu.removeMenuSub(this);
    },
  };
</script>
