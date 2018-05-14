<template>
  <div class="v-popover">
    <transition
      :name="transition"
      @after-enter="handleAfterEnter"
      @after-leave="handleAfterLeave">
      <div
        ref="popper"
        role="tooltip"
        class="v-popover--popper"
        :class="[
          'v-popover--placement-' + placement,
        ]"
        :style="{ width: width + 'px' }"
        v-show="!disabled && showPopper">
        <div class="v-popover--arrow"></div>
        <div class="v-popover--inner">
          <div class="v-popover--title" v-if="title || $slots.title">
            <slot name="title">{{title}}</slot>
          </div>
          <div class="v-popover--content" v-if="content || $slots.content">
            <slot name="content">{{ content }}</slot>
          </div>
          <div class="v-popover--footer" v-if="footer">
            <slot name="footer">
              <Button size="mini" :loading="loading" theme="primary" @click="handleOk">{{okText}}</Button>
              <Button size="mini" @click="handleClose">{{cancelText}}</Button>
            </slot>
          </div>
        </div>
      </div>
    </transition>
    <slot name="reference"></slot>
  </div>
</template>
<script>
  import { on, off } from 'free-vui/src/utils/dom';
  import Popper from 'free-vui/src/utils/popper';
  import Button from 'free-vui/src/components/button';

  export default {
    name: 'Popover',
    componentName: 'Popover',
    mixins: [Popper],
    components: {
      Button,
    },
    props: {
      placement: {
        type: String,
        default: 'top',
      },
      transition: {
        type: String,
        default: 'fade-in-linear',
      },
      title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
      trigger: {
        type: String,
        default: 'click',
      },
      openDelay: {
        type: Number,
        default: 300,
      },
      hideDelay: {
        type: Number,
        default: 300,
      },
      width: {},
      okText: {
        type: String,
        default: '确定',
      },
      cancelText: {
        type: String,
        default: '取消',
      },
      footer: Boolean,
      loading: Boolean,
      disabled: Boolean,
      beforeClose: Function,
    },
    watch: {
      showPopper(val) {
        val ? this.$emit('show') : this.$emit('hide');
      },
    },
    methods: {
      doToggle() {
        this.showPopper = !this.showPopper;
      },
      doShow() {
        this.showPopper = true;
      },
      doClose() {
        this.showPopper = false;
      },
      handleFocus() {
        if (this.trigger !== 'manual') this.showPopper = true;
      },
      handleBlur() {
        if (this.trigger !== 'manual') this.showPopper = false;
      },
      handleMouseEnter() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopper = true;
        }, this.openDelay);
      },
      handleMouseLeave() {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopper = false;
        }, this.hideDelay);
      },
      handleKeydown(e) {
        if (e.keyCode === 27 && this.trigger !== 'manual') {
          this.doClose();
        }
      },
      handleDocumentClick(e) {
        let reference = this.reference || this.$refs.reference;
        const popper = this.popper || this.$refs.popper;
        if (!reference && this.$slots.reference && this.$slots.reference[0]) {
          reference = this.referenceElm = this.$slots.reference[0].elm;
        }
        if (!this.$el || !reference ||
          this.$el.contains(e.target) ||
          reference.contains(e.target) || !popper ||
          popper.contains(e.target)) return;
        this.showPopper = false;
      },
      handleAfterEnter() {
        this.$emit('after-enter');
      },
      handleAfterLeave() {
        this.$emit('after-leave');
        this.doDestroy();
      },
      handleOk() {
        this.$emit('ok');
      },
      handleClose() {
        if (typeof this.beforeClose === 'function') {
          this.beforeClose(this.doClose);
        } else {
          this.doClose();
        }
      },
    },
    mounted() {
      const popper = this.popper || this.$refs.popper;
      let reference = this.referenceElm = this.reference || this.$refs.reference;
      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (reference) {
        if (this.trigger !== 'click') {
          on(reference, 'focusin', () => {
            this.handleFocus();
            const instance = reference.__vue__;
            if (instance && instance.focus) {
              instance.focus();
            }
          });
          on(popper, 'focusin', this.handleFocus);
          on(reference, 'focusout', this.handleBlur);
          on(popper, 'focusout', this.handleBlur);
        }
        on(reference, 'keydown', this.handleKeydown);
      }
      if (this.trigger === 'click') {
        on(reference, 'click', this.doToggle);
        on(document, 'click', this.handleDocumentClick);
      } else if (this.trigger === 'hover') {
        on(reference, 'mouseenter', this.handleMouseEnter);
        on(popper, 'mouseenter', this.handleMouseEnter);
        on(reference, 'mouseleave', this.handleMouseLeave);
        on(popper, 'mouseleave', this.handleMouseLeave);
      } else if (this.trigger === 'focus') {
        let found = false;
        if ([].slice.call(reference.children).length) {
          const children = reference.childNodes;
          const len = children.length;
          for (let i = 0; i < len; i++) {
            if (children[i].nodeName === 'INPUT' || children[i].nodeName === 'TEXTAREA') {
              on(children[i], 'focusin', this.doShow);
              on(children[i], 'focusout', this.doClose);
              found = true;
              break;
            }
          }
        }
        if (found) return;
        if (reference.nodeName === 'INPUT' || reference.nodeName === 'TEXTAREA') {
          on(reference, 'focusin', this.doShow);
          on(reference, 'focusout', this.doClose);
        } else {
          on(reference, 'mousedown', this.doShow);
          on(reference, 'mouseup', this.doClose);
        }
      }
    },
    destroyed() {
      const reference = this.reference;
      off(reference, 'click', this.doToggle);
      off(reference, 'mouseup', this.doClose);
      off(reference, 'mousedown', this.doShow);
      off(reference, 'focusin', this.doShow);
      off(reference, 'focusout', this.doClose);
      off(reference, 'mouseleave', this.handleMouseLeave);
      off(reference, 'mouseenter', this.handleMouseEnter);
      off(document, 'click', this.handleDocumentClick);
    },
  };
</script>
