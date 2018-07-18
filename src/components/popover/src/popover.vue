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
        :style="{ width: `${width}px` }"
        v-show="!disabled && showPopper">
        <div class="v-popover--arrow"></div>
        <div class="v-popover--inner">
          <div class="v-popover--title" v-if="title || $slots.title">
            <slot name="title">{{ title }}</slot>
          </div>
          <div class="v-popover--content" v-if="content || $slots.content">
            <slot name="content">{{ content }}</slot>
          </div>
          <div class="v-popover--footer" v-if="footer">
            <slot name="footer">
              <Button size="mini" :loading="loading" theme="primary" @click="handleOk">{{ okText }}</Button>
              <Button size="mini" @click="handleClose">{{ cancelText }}</Button>
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
    components: {
      Button,
    },
    mixins: [Popper],
    inheritAttrs: false,
    props: {
      transition: {
        type: String,
        default: 'fade-in-linear',
      },
      placement: {
        type: String,
        default: 'top',
      },
      title: {
        type: String,
        default: '',
      },
      content: {
        type: String,
        default: '',
      },
      width: [String, Number],
      trigger: {
        type: String,
        default: 'hover',
      },
      openDelay: {
        type: Number,
        default: 300,
      },
      hideDelay: {
        type: Number,
        default: 300,
      },
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
    data() {
      return {
        appendToBody: true,
      };
    },
    watch: {
      showPopper: {
        handler(val) {
          val ? this.$emit('show') : this.$emit('hide');
        },
      },
    },
    mounted() {
      const popper = this.popper || this.$refs.popper;
      let reference = this.referenceElm = this.reference || this.$refs.reference;
      if (!reference && this.$slots.reference && this.$slots.reference[0]) {
        reference = this.referenceElm = this.$slots.reference[0].elm;
      }
      if (reference) {
        if (this.trigger === 'click') {
          on(reference, 'click', this.doToggle);
          on(document, 'click', this.handleDocumentClick);
        } else if (this.trigger === 'hover') {
          on(reference, 'mouseenter', this.handleMouseEnter);
          on(popper, 'mouseenter', this.handleMouseEnter);
          on(reference, 'mouseleave', this.handleMouseLeave);
          on(popper, 'mouseleave', this.handleMouseLeave);
        } else if (this.trigger === 'focus') {
          on(reference, 'focusin', this.doShow);
          on(reference, 'focusout', this.doClose);
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
        this.showPopper = true;
      },
      handleBlur() {
        this.showPopper = false;
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
        if (e.keyCode === 27) {
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
  };
</script>
