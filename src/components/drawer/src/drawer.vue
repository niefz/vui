<template>
  <div class="drawer">
    <transition name="fade-in-linear">
      <div class="v-drawer--mask" v-show="visible" @click.self="handleWrapperClick"></div>
    </transition>
    <transition :name="name">
      <div class="v-drawer--wrapper" v-show="visible" @click.self="handleWrapperClick">
        <div
          ref="modal"
          class="v-drawer"
          :class="[
            'v-drawer--' + placement,
            {
              ['fullscreen']: fullscreen,
            }
          ]">
          <div class="v-drawer--header">
            <slot name="header">
              <slot name="title">
                <span class="v-drawer--header-title">{{title}}</span>
              </slot>
              <em class="v-drawer--header-close" v-show="closable" @click="handleClose">
                <slot name="close">
                  <v-icon icon="icon-close"></v-icon>
                </slot>
              </em>
            </slot>
          </div>
          <div class="v-drawer--body">
            <slot name="body"></slot>
          </div>
          <div class="v-drawer--footer" v-if="footer">
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
    name: 'Drawer',
    componentName: 'Drawer',
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
        default: 'right',
      },
      title: {
        type: String,
        default: '',
      },
      visible: {
        type: Boolean,
        default: true,
      },
      mask: {
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
      beforeClose: Function,
    },
    data() {
      return {
        closed: false,
      };
    },
    computed: {
      name() {
        let name;
        switch (this.placement) {
          case 'top':
            name = 'drawer-zoom-top';
            break;
          case 'right':
            name = 'drawer-zoom-right';
            break;
          case 'bottom':
            name = 'drawer-zoom-bottom';
            break;
          case 'left':
            name = 'drawer-zoom-left';
            break;
          default:
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
          document.body.appendChild(this.$el);
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
        document.body.appendChild(this.$el);
      }
      document.addEventListener('keydown', this.handleEsc);
    },
    beforeDestroy () {
      document.removeEventListener('keydown', this.handleEsc);
    },
    destroyed() {
      if (this.$el && this.$el.parentNode) {
        this.$el.parentNode.removeChild(this.$el);
      }
    },
  };
</script>
