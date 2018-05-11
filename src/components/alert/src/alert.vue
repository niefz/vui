<template>
  <transition name="alert-fade">
    <div
      class="v-alert"
      :class="[
        'v-alert--' + theme,
        'v-alert--align-' + align,
        {
          ['v-alert--with-icon']: showIcon,
        }
      ]"
      v-show="visible">
      <div class="v-alert--message" :class="{'with-desc': $slots.desc || description}">
        <v-icon :icon="`icon-${theme}`" v-if="showIcon"></v-icon>
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
          <v-icon icon="icon-close"></v-icon>
        </template>
      </em>
    </div>
  </transition>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Alert',
    componentName: 'Alert',
    components: {
      VIcon: Icon,
    },
    props: {
      theme: {
        type: String,
        default: 'info',
      },
      align: {
        type: String,
        default: 'left',
      },
      message: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
      closeText: {
        type: String,
        default: '',
      },
      showIcon: Boolean,
      closable: Boolean,
    },
    data() {
      return {
        visible: true,
      };
    },
    methods: {
      handleClose() {
        this.visible = false;
        this.$emit('close');
      },
    },
  };
</script>
