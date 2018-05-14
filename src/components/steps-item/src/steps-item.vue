<template>
  <div
    class="v-steps--item"
    :class="[
      {
        finish: steps.current > index,
        process: steps.current === index && !steps.status,
        wait: steps.current < index,
        [steps.status]: steps.current === index,
      }
    ]">
    <div class="v-steps--item-tail" v-if="steps.mode === 'vertical'"></div>
    <div class="v-steps--icon">
      <template v-if="icon">
        <Icon :icon="icon"></Icon>
      </template>
      <template v-else>
        <span class="v-steps--icon-inner">
          <template v-if="steps.current > index">
            <Icon icon="v-icon-check"></Icon>
          </template>
          <template v-else>
            <template v-if="steps.current === index && steps.status === 'error'">
              <Icon icon="v-icon-close"></Icon>
            </template>
            <template v-else>{{index}}</template>
          </template>
        </span>
      </template>
    </div>
    <div class="v-steps--item-content">
      <div class="v-steps--item-title">{{title}}</div>
      <div class="v-steps--item-description">
        <slot name="description">{{description}}</slot>
      </div>
    </div>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'StepsItem',
    componentName: 'StepsItem',
    components: {
      Icon,
    },
    inject: ['steps'],
    props: {
      icon: {
        type: String,
        default: '',
      },
      title: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
    },
    data() {
      return {
        index: -1,
      };
    },
    mounted() {
      this.steps.addSteps(this);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
      this.steps.removeSteps(this);
    },
  };
</script>
