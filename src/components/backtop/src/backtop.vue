<template>
  <div
    :class="[
      'v-backtop',
      {
        ['show']: backTop,
      }
    ]"
    @click="backTop">
    <slot>
      <div class="v-backtop__inner">
        <v-icon icon="v-icon-chevron-up"></v-icon>
      </div>
    </slot>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    components: {
      VIcon: Icon,
    },
    props: {
      visibilityHeight: {
        type: Number,
        default: 400,
      },
      duration: {
        type: Number,
        default: 1000,
      },
    },
    data () {
      return {
        backTop: false,
      };
    },
    methods: {
      handleScroll () {
        this.backTop = window.pageYOffset >= this.height;
      },
      backTop () {
        window.scrollTop(0, this.duration);
        this.$emit('on-click');
      }
    },
    mounted () {
      window.addEventListener('scroll', this.handleScroll, false);
      window.addEventListener('resize', this.handleScroll, false);
    },
    beforeDestroy () {
      window.removeEventListener('scroll', this.handleScroll, false);
      window.removeEventListener('resize', this.handleScroll, false);
    },
  };
</script>