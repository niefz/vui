<template>
  <div
    ref="tabs"
    class="v-tabs--nav-item"
    :class="[
      {
        ['active']: value === tabs.value,
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
      label: {
        type: String,
        default: '',
      },
      value: [Object, String, Number],
      disabled: Boolean,
    },
    methods: {
      handleClick() {
        if (this.disabled)  return;
        this.$emit('update:value', this.value);
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
