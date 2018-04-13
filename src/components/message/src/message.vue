<template>
  <transition name="message-fade">
    <div
      class="v-message"
      :class="[
        'v-message--' + theme,
        'v-message--align-' + align,
        {
          ['v-message--with-icon']: showIcon,
        }
      ]"
      v-show="visible"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      role="alert">
      <v-icon :icon="iconClass" v-show="showIcon"></v-icon>
      <div class="v-message--content">
        <slot>
          {{message}}
        </slot>
      </div>
    </div>
  </transition>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Message',
    componentName: 'Message',
    components: {
      VIcon: Icon,
    },
    data() {
      return {
        visible: false,
        closed: false,
        theme: 'info',
        message: '',
        align: 'left',
        duration: 3000,
        showIcon: Boolean,
      };
    },
    computed: {
      iconClass() {
        return this.customIcon || `v-icon-${this.theme}`;
      },
    },
    watch: {
      closed(val) {
        if (val) {
          this.visible = false;
          this.$el.addEventListener('transitionend', this.destroyElement);
        }
      }
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
    mounted() {
      this.startTimer();
      document.addEventListener('keydown', this.keydown);
    },
    beforeDestroy() {
      document.removeEventListener('keydown', this.keydown);
    },
  };
</script>