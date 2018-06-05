/**
 * Created by niefz on 2018/1/8.
 */
import Vue from 'vue';

const popperJs = require('popper.js/dist/umd/popper.js');
const Popper = Vue.prototype.$isServer ? () => {
} : popperJs;
const stop = e => e.stopPropagation();

export default {
  props: {
    popper: {},
    reference: {},
    popperOptions: {
      type: Object,
      default() {
        return {
          modifiers: {
            computeStyle: {
              gpuAcceleration: false,
            },
          },
        };
      },
    },
  },
  data() {
    return {
      showPopper: false,
      currentPlacement: '',
    };
  },
  watch: {
    value: {
      immediate: true,
      handler(val) {
        this.showPopper = val;
        this.$emit('input', val);
      },
    },
    showPopper(val) {
      val ? this.updatePopper() : this.destroyPopper();
      this.$emit('input', val);
    },
  },
  methods: {
    createPopper() {
      if (this.$isServer) return;
      this.currentPlacement = this.currentPlacement || this.placement;
      if (!/^(top|right|bottom|left)(-start|-end)?$/g.test(this.currentPlacement)) return;

      const options = this.popperOptions;
      const popper = this.popperElm = this.popperElm || this.popper || this.$refs.popper;
      let reference = this.referenceElm = this.referenceElm || this.reference || this.$refs.reference;

      if (!reference && this.$slots.reference && this.$slots.reference[ 0 ]) {
        reference = this.referenceElm = this.$slots.reference[ 0 ].elm;
      }

      if (!popper || !reference) return;
      if (this.appendToBody) document.body.appendChild(this.popperElm);
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) this.popperJS.destroy();

      options.placement = this.currentPlacement;

      this.popperJS = new Popper(reference, popper, options);
      this.popperJS.onCreate = () => {
        this.$emit('created', this);
        this.$nextTick(this.updatePopper);
      };
      if (typeof options.onUpdate === 'function') {
        this.popperJS.onUpdate(options.onUpdate);
      }
      this.popperElm.addEventListener('click', stop);
    },
    updatePopper() {
      this.popperJS ? this.popperJS.update() : this.createPopper();
    },
    doDestroy(forceDestroy) {
      if (!this.popperJS || (this.showPopper && !forceDestroy)) return;
      this.popperJS.destroy();
      this.popperJS = null;
    },
    destroyPopper() {
    },
  },
  beforeDestroy() {
    this.doDestroy(true);
    if (this.popperElm && this.popperElm.parentNode === document.body) {
      this.popperElm.removeEventListener('click', stop);
      document.body.removeChild(this.popperElm);
    }
  },
  deactivated() {
    this.$options.beforeDestroy[ 0 ].call(this);
  },
};
