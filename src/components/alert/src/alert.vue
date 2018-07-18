<template>
  <transition name="alert-fade">
    <div
      class="v-alert"
      :class="[
        'v-alert--' + theme,
        {
          ['v-alert--with-icon']: showIcon,
        }
      ]"
      v-show="visible">
      <div class="v-alert--message" :class="{'with-desc': $slots.desc || description}">
        <Icon :icon="iconClass" v-if="showIcon"></Icon>
        <span class="v-alert--message-title">
          <slot>{{message}}</slot>
        </span>
        <template v-if="description">
          <p class="v-alert--message-description">
            <slot name="desc">{{description}}</slot>
          </p>
        </template>
      </div>
      <em class="v-alert--close" @click.stop="handleClose" v-if="closable">
        <template v-if="closeText"><i>{{closeText}}</i></template>
        <template v-else>
          <Icon icon="v-icon-close-o"></Icon>
        </template>
      </em>
    </div>
  </transition>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Alert',
    components: {
      Icon,
    },
    inheritAttrs: false,
    props: {
      theme: {
        type: String,
        default: 'info',
      },
      message: {
        type: String,
      },
      description: {
        type: String,
      },
      icon: {
        type: String,
      },
      showIcon: {
        type: Boolean,
      },
      closeText: {
        type: String,
      },
      closable: {
        type: Boolean,
      },
    },
    data() {
      return {
        visible: true,
      };
    },
    computed: {
      iconClass() {
        return this.icon || `v-icon-${this.theme}`;
      },
    },
    methods: {
      handleClose() {
        this.visible = false;
        this.$emit('close');
      },
    },
  };
</script>
