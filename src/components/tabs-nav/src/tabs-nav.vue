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
    computed: {
      active() {
        return this.tabs.active === this.value;
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
