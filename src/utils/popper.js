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
    transformOrigin: {
      type: [Boolean, String],
      default: true
    },
    placement: {
      type: String,
      default: 'bottom',
    },
    boundariesPadding: {
      type: Number,
      default: 5,
    },
    reference: Object,
    popper: Object,
    offset: {
      type: Number,
      default: 0,
    },
    value: {
      type: Boolean,
      default: false,
    },
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    arrowOffset: {
      type: Number,
      default: 35
    },
    transition: String,
    appendToBody: {
      type: Boolean,
      default: true,
    },
    popperOptions: {
      type: Object,
      default() {
        return {
          gpuAcceleration: false,
        };
      },
    },
  },
  data() {
    return {
      showPopper: false,
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
      if (!/^(top|bottom|left|right)(-start|-end)?$/g.test(this.placement)) return;

      const options = this.popperOptions;
      const popper = this.popperElm = this.popper || this.$refs.popper;
      const reference = this.reference || this.$refs.reference;

      if (!popper || !reference) return;
      if (this.appendToBody) document.body.appendChild(this.popperElm);
      if (this.popperJS && this.popperJS.hasOwnProperty('destroy')) this.popperJS.destroy();

      options.placement = this.placement;
      options.offset = this.offset;
      options.arrowOffset = this.arrowOffset;
      this.popperJS = new Popper(reference, popper, options);
      this.popperJS.onCreate = () => {
        this.$emit('created', this);
        this.resetTransformOrigin();
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
      if (this.popperJS) {
        this.resetTransformOrigin();
      }
    },
    resetTransformOrigin() {
      if (!this.transformOrigin) return;
      let placementMap = {
        top: 'bottom',
        bottom: 'top',
        left: 'right',
        right: 'left'
      };
      let placement = this.popperJS.popper.getAttribute('x-placement').split('-')[0];
      let origin = placementMap[placement];
      this.popperJS.popper.style.transformOrigin = typeof this.transformOrigin === 'string'
        ? this.transformOrigin
        : ['top', 'bottom'].indexOf(placement) > -1 ? `center ${ origin }` : `${ origin } center`;
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
    this.$options.beforeDestroy[0].call(this);
  },
};