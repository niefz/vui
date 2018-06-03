<template>
  <div class="modal">
    <transition name="fade-in-linear">
      <div class="v-modal--mask" v-show="visible" @click.self="handleWrapperClick"></div>
    </transition>
    <transition :name="transition">
      <div class="v-modal--wrapper" v-show="visible" @click.self="handleWrapperClick">
        <div
          ref="modal"
          class="v-modal"
          :class="[
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
              <em class="v-modal--header-close" v-show="showClose" @click="handleClose">
                <slot name="close">
                  <Icon icon="v-icon-close-o"></Icon>
                </slot>
              </em>
            </slot>
          </div>
          <div class="v-modal--body">
            <slot name="body"></slot>
          </div>
          <div class="v-modal--footer" v-if="footer">
            <slot name="footer">
              <Button :loading="loading" theme="primary" @click="handleOk">{{okText}}</Button>
              <Button @click="handleClose">{{cancelText}}</Button>
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
      Icon,
      Button,
    },
    props: {
      visible: {
        type: Boolean,
        default: true,
      },
      transition: {
        type: String,
        default: 'modal-fade',
      },
      title: {
        type: String,
        default: '提示',
      },
      top: {
        type: String,
        default: '',
      },
      width: {
        type: String,
        default: '50%',
      },
      mask: {
        type: Boolean,
        default: true,
      },
      maskAppendToBody: {
        type: Boolean,
        default: true,
      },
      modalAppendToBody: {
        type: Boolean,
        default: true,
      },
      showClose: {
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
      footer: {
        type: Boolean,
        default: true,
      },
      okText: {
        type: String,
        default: '确定',
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      lockScroll: Boolean,
      fullscreen: Boolean,
      loading: Boolean,
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
        if (!this.fullscreen) {
          style.width = this.width;
          if (this.top) {
            style.top = this.top;
            style.transform = 'translate(-50%, 0)';
          } else {
            style.top = '50%';
            style.transform = 'translate(-50%, -50%)';
          }
        }
        return style;
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
