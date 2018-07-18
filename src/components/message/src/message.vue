<template>
  <transition name="message-fade">
    <div
      class="v-message"
      :class="[
        'v-message--' + theme,
        {
          ['v-message--with-icon']: showIcon,
        }
      ]"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      v-show="visible">
      <Icon :icon="iconClass" v-if="showIcon"></Icon>
      <div class="v-message--content" v-html="message"></div>
    </div>
  </transition>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Message',
    components: {
      Icon,
    },
    inheritAttrs: false,
    data() {
      return {
        visible: false,
        closed: false,
        theme: 'info',
        message: '',
        duration: 3000,
        showIcon: true,
      };
    },
    computed: {
      iconClass() {
        return this.icon || `v-icon-${this.theme}`;
      },
    },
    watch: {
      closed: {
        handler(val) {
          if (val) {
            this.visible = false;
            this.$el.addEventListener('transitionend', this.destroyElement);
          }
        },
      },
    },
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    },
    methods: {
      destroyElement() {
        this.$el.removeEventListener('transitionend', this.destroyElement);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose(this);
        }
      },
      clearTimer() {
        clearTimeout(this.timer);
      },
      startTimer() {
        if (this.duration) {
          this.timer = setTimeout(() => {
            if (!this.closed) {
              this.close();
            }
          }, this.duration);
        }
      },
      keydown(e) {
        if (e.keyCode === 27) {
          if (!this.closed) {
            this.close();
          }
        }
      },
    },
  };
</script>