<template>
  <div 
    class="v-carousel--item"
    :class="{
      actived: actived
    }"
    :style="{
      transform: `translateX(${ translate }px)`
    }"
  >
    <slot></slot>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'CarouselItem',
    components: {
      Icon,
    },
    inheritAttrs: false,
    props: {
      value: {
        type: Number,
        default: 0,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        actived: false,
        translate: 0,
      };
    },
    computed: {
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
      moveItem(index, currentIndex, prevIndex) {
        const parentWidth = this.$parent.$el.offsetWidth;
        const length = this.$parent.carouselItems.length;
        this.actived = index === currentIndex;
        this.translate = parentWidth * (index - currentIndex);
      },
    },
  };
</script>
