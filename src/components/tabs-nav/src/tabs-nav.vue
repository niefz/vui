<template>
  <div
    class="v-tabs--nav-item"
    :class="[
      {
        ['active']: active,
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
      <span class="v-tabs--nav-close" v-if="isClosable && !disabled">
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
    componentName: 'TabsNav',
    components: {
      Icon,
    },
    mixins: [Emitter],
    inject: ['tabs'],
    props: {
      label: String,
      name: [Object, String, Number],
      icon: String,
      closable: Boolean,
      disabled: Boolean,
    },
    computed: {
      active() {
        return this.tabs.active === this.name;
      },
      isClosable() {
        return this.tabs.closable || this.closable;
      },
    },
    methods: {
      handleClick(event) {
        if (this.disabled)  return;
        this.dispatch('Tabs', 'tabs-item-click', [this, event]);
      },
    },
    mounted() {
      this.tabs.addTabs(this);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.tabs.removeTabs(this);
    },
  };
</script>
