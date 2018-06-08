<template>
  <div 
    class="v-carousel__item"
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
    componentName: 'CarouselItem',
    inheritAttrs: false,
    components: {
      Icon,
    },
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
    methods: {
      moveItem(index, currentIndex, prevIndex) {
        const parentWidth = this.$parent.$el.offsetWidth;
        const length = this.$parent.carouselItems.length;
        this.actived = index === currentIndex;
        this.translate = parentWidth * (index - currentIndex);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
