<template>
  <transition name="v-alert-fade">
    <div
      class="v-alert"
      :class="[
        'v-alert--' + theme,
        'v-alert--align-' + align,
      ]"
      v-show="visible">
      <v-icon :icon="`v-icon-${theme}`" v-if="showIcon"></v-icon>
      <div class="v-alert--message">
        <template v-if="message">
          <span :class="{'v-alert--message-title': $slots.default || description}">{{message}}</span>
        </template>
        <slot>
          <p class="v-alert--message-description" v-if="description">{{description}}</p>
        </slot>
      </div>
      <em class="v-alert--close" v-if="closable">
        <template v-if="closeText"><i @click="handleClose">{{closeText}}</i></template>
        <template v-else><v-icon icon="v-icon-close" @click="handleClose"></v-icon></template>
      </em>
    </div>
  </transition>
</template>
<script>
  import Icon from '@/components/icon';

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
