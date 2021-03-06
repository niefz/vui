<template>
  <div
    class="v-carousel"
    :class="{
      hover: isHover
    }"
    @mouseenter.stop="handleMouseEnter"
    @mouseleave.stop="handleMouseLeave"
  >
    <div 
      class="v-carousel--box"
      :style="{
        height: height
      }"
    >
      <template v-if="arrows">
        <button
          type="button"
          class="v-carousel--arrow v-carousel--arrow--left"
          @click="back"
        >
          <Icon icon="v-icon-left"></Icon>
        </button>
        <button
          type="button"
          class="v-carousel--arrow v-carousel--arrow--right"
          @click="forward"
        >
          <Icon icon="v-icon-right"></Icon>
        </button>
      </template>
      <slot></slot>
    </div>
    <ul v-if="indicators" class="v-carousel--indicators">
      <li
        v-for="(item, index) in carouselItems"
        class="v-carousel--indicators--item"
        :class="{
          actived: currentIndex === index
        }"
        @click="handleCarouselItemsClick(index)"
      ></li>
    </ul>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Carousel',
    components: {
      Icon,
    },
    inheritAttrs: false,
    props: {
      height: {
        type: String,
      },
      autoplay: {
        type: Boolean,
        default: true,
      },
      interval: {
        type: Number,
        default: 3000,
      },
      indicators: {
        type: Boolean,
        default: true,
      },
      arrows: {
        type: Boolean,
        default: true,
      },
    },
    data() {
      return {
        isHover: false,
        carouselItems: [],
        currentIndex: -1,
        timerFunc: null,
      };
    },
    computed: {
    },
    watch: {
      currentIndex: {
        handler(curVal, preVal) {
          this.setItemPosition(curVal);
          this.$emit('change', curVal, preVal);
        },
      },
    },
    created() {
    },
    mounted() {
      this.getCarouselItems();
      this.start();
    },
    methods: {
      handleMouseEnter() {
        this.isHover = true;
        this.stop();
      },
      handleMouseLeave() {
        this.isHover = false;
        this.start();
      },
      start() {
        if(!this.autoplay) return;
        this.timerFunc = setInterval(this.play, this.interval);
      },
      stop() {
        clearInterval(this.timerFunc);
      },
      play() {
        if (this.currentIndex < this.carouselItems.length - 1) {
          this.currentIndex++;
        } else {
          this.currentIndex = 0;
        }
      },
      handleCarouselItemsClick(index) {
        this.currentIndex = index;
      },
      setItemPosition(index) {
        this.carouselItems.forEach((v, i) => {
          v.moveItem(i, this.currentIndex, index);
        });
      },
      setCurrentIndex(index) {
        index = Number(index);
        if(isNaN(index)) return;

        let length = this.carouselItems.length;
        let lastIndex = this.currentIndex;
        if (index < 0) {
          this.currentIndex = length - 1;
        } else if (index >= length) {
          this.currentIndex = 0;
        } else {
          this.currentIndex = index;
        }
        (this.currentIndex === lastIndex) && this.setItemPosition(lastIndex);
      },
      getCarouselItems() {
        this.carouselItems = this.$children.filter(child => child.$options.name === 'CarouselItem');
      },
      forward() {
        this.setCurrentIndex(this.currentIndex + 1);
      },
      back() {
        this.setCurrentIndex(this.currentIndex - 1);
      },
    },
  };
</script>
