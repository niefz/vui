<template>
  <div
    class="v-carousel"
    :class="[
      {}
    ]"
  >
    <div class="v-carousel__box">
      <button
        type="button"
        class="v-carousel__arrow v-carousel__arrow--left">
        <Icon icon="v-icon-left"></Icon>
      </button>
      <button
        type="button"
        class="v-carousel__arrow v-carousel__arrow--right">
        <Icon icon="v-icon-right"></Icon>
      </button>
      <div class="v-carousel__item--box"></div>
    </div>
    <ul class="v-carousel__indicators">
      <li class="v-carousel__indicators__item"></li>
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
      };
    },
    computed: {
    },
    watch: {
    },
    methods: {
    },
    created() {
    },
    mounted() {
    },
  };
</script>
