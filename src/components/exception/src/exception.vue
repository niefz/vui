<template>
  <div class="v-exception">
    <div class="v-exception--inner">
      <img class="v-exception--inner-img" :src="exceptionImg" :alt="exception">
      <div class="v-exception--inner-content">
        <h1><slot name="title">{{ exception }}</slot></h1>
        <h2><slot name="desc">{{ exceptionTip }}</slot></h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Exception',
    componentName: 'Exception',
    props: {
      exception: {
        type: String,
        default: '404',
      },
      src: String,
      description: String,
    },
    data() {
      return {
        exceptionImg: this.src,
        exceptionTip: this.description,
        images: {
          '403': require('free-vui/src/images/403.svg'),
          '404': require('free-vui/src/images/404.svg'),
          '500': require('free-vui/src/images/500.svg'),
        },
        descriptions: {
          '403': '抱歉，你无权访问该页面',
          '404': '抱歉，你访问的页面不存在',
          '500': '抱歉，服务器出错了',
        },
      };
    },
    methods: {
      initImage(exception) {
        if (this.src) return;
        this.exceptionImg = this.images[exception];
      },
      initDescription(exception) {
        if (this.description) return;
        this.exceptionTip = this.descriptions[exception];
      },
    },
    created() {
      this.initImage(this.exception);
      this.initDescription(this.exception);
    },
  };
</script>