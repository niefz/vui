<template>
  <div
    class="v-tabs--nav-item"
    :class="[
      {
        ['active']: isActive,
        ['disabled']: disabled,
      }
    ]"
    role="tab"
    @click="handleClick">
    <template v-if="$slots.default">
      <slot></slot>
    </template>
    <template v-else>
      <Icon :icon="icon" v-if="icon"></Icon>{{label}}
      <span class="v-tabs--nav-close" @click="handleTabRemove" v-if="isClosable && !disabled">
        <Icon icon="v-icon-close-o"></Icon>
      </span>
    </template>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'TabsNav',
    inject: ['tabs'],
    components: {
      Icon,
    },
    mixins: [Emitter],
    inheritAttrs: false,
    props: {
      label: {
        type: String,
      },
      name: {
        type: [Object, String, Number],
      },
      icon: {
        type: String,
      },
      closable: {
        type: Boolean,
      },
      disabled: {
        type: Boolean,
      },
    },
    computed: {
      isActive() {
        return this.tabs.currentName === this.name;
      },
      isClosable() {
        return this.tabs.closable || this.closable;
      },
    },
    mounted() {
      this.tabs.addNavs(this);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.tabs.removeNavs(this);
    },
    methods: {
      handleClick(event) {
        if (this.disabled)  return;
        this.dispatch('Tabs', 'tabs-item-click', [this, event]);
      },
      handleTabRemove(event) {
        this.dispatch('Tabs', 'tabs-item-remove', [this, event]);
      },
    },
  };
</script>
