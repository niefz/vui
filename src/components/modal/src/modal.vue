<template>
  <div class="modal">
    <transition name="fade-in-linear">
      <div class="v-modal--mask" v-show="visible" @click.self="handleWrapperClick"></div>
    </transition>
    <transition :name="name">
      <div class="v-modal--wrapper" v-show="visible" @click.self="handleWrapperClick">
        <div
          ref="modal"
          class="v-modal"
          :class="[
            'v-modal--' + placement,
            {
              ['fullscreen']: fullscreen,
            }
          ]"
          :style="style">
          <div class="v-modal--header">
            <slot name="header">
              <slot name="title">
                <span class="v-modal--header-title">{{title}}</span>
              </slot>
              <em class="v-modal--header-close" v-show="closable" @click="handleClose">
                <slot name="close">
                  <v-icon icon="icon-close"></v-icon>
                </slot>
              </em>
            </slot>
          </div>
          <div class="v-modal--body">
            <slot name="body"></slot>
          </div>
          <div class="v-modal--footer" v-if="footer">
            <slot name="footer">
              <v-button :loading="loading" theme="primary" @click="handleOk">{{okText}}</v-button>
              <v-button @click="handleClose">{{cancelText}}</v-button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';
  import Button from 'free-vui/src/components/button';

  export default {
    name: 'Modal',
    componentName: 'Modal',
    components: {
      VIcon: Icon,
      VButton: Button,
    },
    props: {
      transition: {
        type: String,
        default: '',
      },
      placement: {
        type: String,
        default: 'middle',
      },
      title: {
        type: String,
        default: '',
      },
      visible: {
        type: Boolean,
        default: true,
      },
      modalAppendToBody: {
        type: Boolean,
        default: true,
      },
      mask: {
        type: Boolean,
        default: true,
      },
      maskAppendToBody: {
        type: Boolean,
        default: true,
      },
      closeOnClickMask: {
        type: Boolean,
        default: true,
      },
      closeOnPressEscape: {
        type: Boolean,
        default: true,
      },
      closable: {
        type: Boolean,
        default: true,
      },
      footer: {
        type: Boolean,
        default: true,
      },
      lockScroll: {
        type: Boolean,
        default: true,
      },
      loading: Boolean,
      fullscreen: Boolean,
      okText: {
        type: String,
        default: '确定',
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      top: String,
      width: String,
      beforeClose: Function,
    },
    data() {
      return {
        closed: false,
      };
    },
    computed: {
      style() {
        let style = {};
        style.width = this.width || '50%';
        if (!this.fullscreen) {
          if (this.placement === 'middle') {
            if (this.top) {
              style.top = this.top;
              style.transform = 'translate(-50%, 0)';
            } else {
              style.top = '50%';
              style.transform = 'translate(-50%, -50%)';
            }
          }
        }
        return style;
      },
      name() {
        let name;
        switch (this.placement) {
          case 'top-right':
            name = 'modal-zoom-top-right';
            break;
          case 'top-left':
            name = 'modal-zoom-top-left';
            break;
          case 'bottom-right':
            name = 'modal-zoom-bottom-right';
            break;
          case 'bottom-left':
            name = 'modal-zoom-bottom-left';
            break;
          default:
            name = 'modal-fade';
            break;
        }
        return this.transition || name;
      },
    },
    watch: {
      visible(val) {
        if (val) {
          this.closed = false;
          this.$emit('open');
          this.$nextTick(() => {
            this.$refs.modal.scrollTop = 0;
          });
          if (this.modalAppendToBody) {
            document.body.appendChild(this.$el);
          }
        } else {
          if (!this.closed) this.$emit('close');
        }
      }
    },
    methods: {
      /**
       * ok
       */
      handleOk() {
        this.$emit('ok');
      },
      /**
       * close
       */
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.hide);
        } else {
          this.hide();
        }
      },
      /**
       * hide
       * @param cancel
       */
      hide(cancel) {
        if (cancel !== false) {
          this.$emit('update:visible', false);
          this.$emit('close');
          this.closed = true;
        }
      },
      /**
       * esc
       * @param e
       * @constructor
       */
      handleEsc (e) {
        if (this.closeOnPressEscape) {
          if (this.visible) {
            if (e.keyCode === 27) {
              this.handleClose();
            }
          }
        }
      },
      handleWrapperClick() {
        if (this.closeOnClickMask) this.handleClose();
      },
    },
    mounted() {
      if (this.visible) {
        this.open();
        if (this.modalAppendToBody) {
          document.body.appendChild(this.$el);
        }
      }
      document.addEventListener('keydown', this.handleEsc);
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.handleEsc);
    },
    destroyed() {
      if (this.modalAppendToBody && this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
  };
</script>
