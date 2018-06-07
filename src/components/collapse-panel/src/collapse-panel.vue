<template>
  <div
    role="tab"
    class="v-collapse--panel"
    :aria-expanded="isActive">
    <div
      class="v-collapse--panel-header"
      :class="[
        {
          ['active']: isActive,
          ['disabled']: disabled,
        }
      ]"
      @click="handleHeaderClick">
      <slot name="title">{{ title }}</slot>
      <Icon class="v-collapse--panel-header-icon" icon="v-icon-arrow-right-o" v-if="collapse.showArrow"></Icon>
    </div>
    <CollapseTransition>
      <div
        role="tabpanel"
        class="v-collapse--panel-content"
        :class="[
          {
            'active': isActive,
          }
        ]"
        :aria-hidden="!isActive"
        v-show="isActive">
        <div class="v-collapse--panel-content-inner">
          <slot></slot>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>
<script>
  import CollapseTransition from 'free-vui/src/components/collapse-transition';
  import Icon from 'free-vui/src/components/icon';
  import Emitter from 'free-vui/src/mixins/emitter';

  export default {
    name: 'CollapseItem',
    componentName: 'CollapseItem',
    components: {
      CollapseTransition,
      Icon,
    },
    mixins: [Emitter],
    inject: ['collapse'],
    props: {
      title: String,
      name: {
        type: String,
        default() {
          return this._uid;
        },
      },
      disabled: Boolean,
    },
    computed: {
      isActive() {
        const name = this.name;
        const activeNames = this.collapse.activeNames;
        const accordion = this.collapse.accordion;
        return accordion ? activeNames === name : activeNames.includes(name);
      },
    },
    methods: {
      handleHeaderClick() {
        if (this.disabled) return;
        this.dispatch('Collapse', 'panel-click', this);
      },
    },
  };
</script>
