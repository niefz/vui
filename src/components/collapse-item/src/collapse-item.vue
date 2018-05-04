<template>
  <div
    class="v-collapse--item"
    :class="[
      {
        'active': isActive,
      }
    ]">
    <div
      class="v-collapse--item-header"
      :class="[
        {
          'active': isActive,
        }
      ]"
      @click="handleHeaderClick"
      @keyup.space.enter.stop="handleEnterClick">
      <slot name="title">{{title}}</slot>
      <v-icon class="v-collapse--item-header-icon" icon="v-icon-arrow-right"></v-icon>
    </div>
    <v-collapse-transition>
      <div
        role="panel"
        class="v-collapse--item-content"
        v-show="isActive">
        <div class="v-collapse--item-content-inner">
          <slot></slot>
        </div>
      </div>
    </v-collapse-transition>
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
      VCollapseTransition: CollapseTransition,
      VIcon: Icon,
    },
    mixins: [Emitter],
    inject: ['collapse'],
    props: {
      title: String,
      name: {
        type: [String, Number],
        default() {
          return this._uid;
        },
      },
    },
    computed: {
      isActive() {
        return this.collapse.activeNames.indexOf(this.name) > -1;
      },
    },
    methods: {
      handleHeaderClick() {
        this.dispatch('Collapse', 'item-click', this);
      },
      handleEnterClick() {
        this.dispatch('Collapse', 'item-click', this);
      },
    },
  };
</script>
