<template>
  <div class="v-slider">
    <div 
      class="v-slider__bar"
      @click="handleSliderClick"
      ref="sliderBar"
    >
      <div class="v-slider__process" :style="
        {
          width: calWidth
        }
      "></div>
      <span class="v-slider__button" :style="
        {
          left: calWidth
        }
      "></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Slider',
    componentName: 'Slider',
    props: {
      value: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
    },
    data() {
      return {
        calWidth: this.value + '%'
      };
    },
    computed: {
      isDisabled () {
        return this.disabled;
      },
    },
    watch: {
      value(val) {
        this.$emit('change', val);
      }
    },
    methods: {
      change(val) {
        this.$emit('input', val);
      },
      handleSliderClick(e) {
        const sliderBarOffset = this.$refs['sliderBar'].getBoundingClientRect().left;
        const sliderWidth = this.$refs['sliderBar'].clientWidth;
        const number = (e.clientX - sliderBarOffset) * 100 / sliderWidth;
        this.setSliderPosition(number);
      },
      setSliderPosition(percent) {
        this.calWidth = percent + '%';
        this.change(percent);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>