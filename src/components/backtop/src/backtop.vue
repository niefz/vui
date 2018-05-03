<template>
  <div
    :class="[
      'v-backtop',
      {
        ['show']: backTop,
      }
    ]"
    @click.stop="handleBack">
    <slot>
      <div class="v-backtop--inner">
        <v-icon icon="v-icon-arrow-up"></v-icon>
      </div>
    </slot>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Backtop',
    componentName: 'Backtop',
    components: {
      VIcon: Icon,
    },
    props: {
      visibilityHeight: {
        type: Number,
        default: 400,
      },
    },
    data () {
      return {
        backTop: false,
      };
    },
    methods: {
      handleScroll () {
        this.backTop = window.pageYOffset >= this.visibilityHeight;
      },
      handleBack () {
        window.scrollTo(0, 0);
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