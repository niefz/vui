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
    <Icon :icon="icon" v-if="icon"></Icon>{{label}}
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
