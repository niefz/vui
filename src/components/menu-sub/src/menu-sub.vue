<template>
  <li
    class="v-menu--sub"
    :class="[
      {
        ['active']: active,
        ['disabled']: disabled,
      }
    ]"
    aria-haspopup="true"
    aria-expanded="true"
    role="menuitem"
    @click="handleClick">
    <template>
      <div class="v-menu--sub-title" :style="{paddingLeft: paddingLeft + 'px'}">
        <slot name="title"></slot>
      </div>
      <ul class="v-menu--sub-menu">
        <slot></slot>
      </ul>
    </template>
  </li>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'MenuSub',
    componentName: 'MenuSub',
    mixins: [Emitter],
    inject: ['menu'],
    props: {
      active: Boolean,
      disabled: Boolean,
    },
    computed: {
      paddingLeft() {
        let indent = this.menu.indent;
        let parent = this.$parent;
        while (parent && parent.$options.componentName !== 'Menu') {
          if (parent.$options.componentName === 'MenuSub') {
            indent += 20;
          }
          parent = parent.$parent;
        }
        return indent;
      },
    },
    methods: {
      handleClick() {
      },
    },
  };
</script>
