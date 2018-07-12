<template>
  <transition name="notify-fade">
    <div
      class="v-notify"
      :class="[
        'v-notify--' + theme,
        horizontalProperty,
        {
          ['v-notify--with-icon']: showIcon,
        }
      ]"
      :style="style"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
      v-show="visible">
      <div class="v-notify--message" :class="{'with-content': content}">
        <Icon :icon="iconClass" v-if="showIcon"></Icon>
        <span class="v-notify--message-title" v-html="title"></span>
        <template v-if="content">
          <div class="v-alert--message-content" v-html="content"></div>
        </template>
      </div>
      <em class="v-notify--close" @click.stop="close" v-if="closable">
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
    name: 'Notification',
    components: {
      Icon,
    },
    inheritAttrs: false,
    data() {
      return {
        visible: false,
        closed: false,
        theme: 'info',
        title: '',
        content: '',
        closeText: '',
        placement: 'top-right',
        offset: 0,
        duration: 3000,
        showIcon: true,
        closable: true,
      };
    },
    computed: {
      iconClass() {
        return this.icon || `v-icon-${this.theme}`;
      },
      horizontalProperty() {
        return /-right$/.test(this.placement) ? 'right' : 'left';
      },
      verticalProperty() {
        return /^top-/.test(this.placement) ? 'top' : 'bottom';
      },
      style() {
        return {
          [this.verticalProperty]: `${this.offset}px`,
        };
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
      click() {
        if (typeof this.onClick === 'function') {
          this.onClick();
        }
      },
      close() {
        this.closed = true;
        if (typeof this.onClose === 'function') {
          this.onClose();
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
