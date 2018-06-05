<template>
  <div
    :class="[
      'v-backtop',
      {
        ['show']: backTop,
      }
    ]"
    :style="style"
    @click.stop="handleBack">
    <slot>
      <div class="v-backtop--inner">
        <Icon icon="v-icon-backtop"></Icon>
      </div>
    </slot>
  </div>
</template>
<script>
  import { scrollTop } from 'free-vui/src/utils/utils'
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'BackTop',
    componentName: 'BackTop',
    components: {
      Icon,
    },
    props: {
      visibilityHeight: {
        type: Number,
        default: 400,
      },
      bottom: {
        type: Number,
        default: 30,
      },
      right: {
        type: Number,
        default: 30,
      },
      duration: {
        type: Number,
        default: 1000,
      },
    },
    data() {
      return {
        backTop: false,
      };
    },
    computed: {
      style() {
        return {
          bottom: `${this.bottom}px`,
          right: `${this.right}px`
        };
      },
    },
    methods: {
      handleScroll() {
        this.backTop = window.pageYOffset >= this.visibilityHeight;
      },
      handleBack() {
        const sTop = document.documentElement.scrollTop || document.body.scrollTop;
        scrollTop(window, sTop, 0, this.duration);
        this.$emit('on-click');
      }
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll, false);
      window.addEventListener('resize', this.handleScroll, false);
    },
    beforeDestroy() {
      window.removeEventListener('scroll', this.handleScroll, false);
      window.removeEventListener('resize', this.handleScroll, false);
    },
  };
</script>