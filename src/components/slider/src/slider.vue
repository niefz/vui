<template>
  <div 
    class="v-slider"
    :class="{
      disabled: isDisabled
    }"
  >
    <div 
      class="v-slider--bar"
      :style="barBackGroundStyle"
      @click="handleSliderClick"
      ref="sliderBar"
    >
      <div class="v-slider--process" :style="[
        { width: calWidth },
        barColorStyle
      ]"></div>
      <span class="v-slider--button" :style="[
        { left: calWidth },
        barButtonStyle
      ]"></span>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Slider',
    inheritAttrs: false,
    props: {
      value: {
        type: Number,
        default: 0
      },
      disabled: {
        type: Boolean,
        default: false
      },
      barColor: {
        type: String,
      },
      barBackgroundColor: {
        type: String,
      },
      buttonBorderColor: {
        type: String,
      },
      buttonColor: {
        type: String,
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
      barBackGroundStyle() {
        const style = {};
        if (this.barBackgroundColor) {
          style['background-color'] = this.barBackgroundColor;
        }
        return style;
      },
      barColorStyle () {
        return this.barColor ? { 'background-color': this.barColor } : null;
      },
      barButtonStyle () {
        const style = {};
        if (this.buttonBorderColor) {
          style['border'] = `1px solid ${this.buttonBorderColor}`;
        } else if (this.barColor) {
          style['border'] = `1px solid ${this.barColor}`;
        }
        if (this.buttonColor) {
          style['background-color'] = this.buttonColor;
        }
        return style;
      },
    },
    watch: {
      value: {
        handler(val) {
          this.$emit('change', val);
        },
      },
    },
    created() {
    },
    mounted() {
    },
    methods: {
      change(val) {
        this.$emit('input', val);
      },
      handleSliderClick(e) {
        if (this.disabled) return;
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
  };
</script>