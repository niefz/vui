<template>
  <div
    class="v-carousel"
    :class="[
      {}
    ]"
  >
    <div 
      class="v-carousel__box"
      :style="{
        height: height
      }"
    >
      <button
        type="button"
        class="v-carousel__arrow v-carousel__arrow--left"
        @click="back"
      >
        <Icon icon="v-icon-left"></Icon>
      </button>
      <button
        type="button"
        class="v-carousel__arrow v-carousel__arrow--right"
        @click="forward"
      >
        <Icon icon="v-icon-right"></Icon>
      </button>
      <slot></slot>
    </div>
    <ul class="v-carousel__indicators">
      <li
        v-for="(item, index) in carouselItems"
        class="v-carousel__indicators__item"
      ></li>
    </ul>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Carousel',
    componentName: 'Carousel',
    components: {
      Icon,
    },
    props: {
      height: String,
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
        carouselItems: [],
        currentIndex: -1,
      };
    },
    computed: {
    },
    watch: {
      currentIndex(curVal, preVal) {
        this.setItemPosition(curVal);
        this.$emit('change', curVal, preVal);
      },
    },
    methods: {
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
    created() {
    },
    mounted() {
      this.getCarouselItems();
    },
  };
</script>
