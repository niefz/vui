<template>
  <transition name="fade">
    <div class="v-loading-bar" :style="{ height: `${height}px` }" v-show="show">
      <div class="v-loading-bar-inner" :style="style"></div>
    </div>
  </transition>
</template>
<script>
  export default {
    name: 'LoadingBar',
    componentName: 'LoadingBar',
    props: {
      height: {
        type: Number,
        default: 2,
      },
      status: {
        type: String,
        default: 'success',
      },
      statusColor: {
        type: String,
        default: 'success',
      },
      failedColor: {
        type: String,
        default: 'error',
      },
    },
    data() {
      return {
        percent: 0,
        status: 'success',
        show: false,
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
  };
</script>
