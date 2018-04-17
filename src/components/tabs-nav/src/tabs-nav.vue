<template>
  <div
    class="v-tabs--nav-item"
    :class="[
      {
        ['active']: value === tabs.active,
        ['disabled']: disabled,
      }
    ]"
    role="tab"
    @click="handleClick">
    {{label}}
  </div>
</template>
<script>
  import Emitter from '@/mixins/emitter';

  export default {
    name: 'TabsNav',
    componentName: 'TabsNav',
    mixins: [Emitter],
    inject: ['tabs'],
    props: {
      label: String,
      value: [Object, String, Number],
      disabled: Boolean,
    },
    methods: {
      handleClick() {
        if (this.disabled)  return;
        this.dispatch('Tabs', 'tabs-item-click', [this]);
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
