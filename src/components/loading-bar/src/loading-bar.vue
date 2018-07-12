<template>
  <transition name="fade-in">
    <div class="v-loading-bar" :style="{ height: `${height}px` }" v-show="visible">
      <div class="v-loading-bar-inner" :style="style"></div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'LoadingBar',
    inheritAttrs: false,
    props: {
      height: {
        type: Number,
        default: 2,
      },
      status: {
        type: String,
        default: 'success',
      },
      successColor: {
        type: String,
        default: '#1890FF',
      },
      errorColor: {
        type: String,
        default: '#F5222D',
      },
    },
    data() {
      return {
        visible: false,
        percent: 0,
      };
    },
    computed: {
      style() {
        let style = {
          width: `${this.percent}%`,
          height: `${this.height}px`,
        };
        style.backgroundColor = this[`${this.status}Color`];
        return style;
      },
    },
    methods: {
      update(options) {
        if ('visible' in options) {
          this.visible = options.visible;
        }
        if ('percent' in options) {
          this.percent = options.percent;
        }
        if ('status' in options) {
          this.status = options.status;
        }
      },
    },
  };
</script>
