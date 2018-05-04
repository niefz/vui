<template>
  <div
    class="v-rate"
    :class="[
      {
        ['disabled']: isDisabled
      }
    ]"
  >
    <span
      v-for="item in points"
      class="v-rate__item"
      :style="{
        fontSize: '20px',
        color: currentValue === 0 ? colors[0] : (item <= currentValue ? colors[2] : colors[1])
      }"
      @click="setValue(item)"
    >
      <slot>
         <v-icon :icon="icon"></v-icon>
      </slot>
    </span>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Rate',
    componentName: 'Rate',
    components: {
      VIcon: Icon,
    },
    props: {
      value: {
        type: Number,
        default: 0,
      },
      icon: {
        type: String,
        default: 'v-icon-heart',
      },
      points: {
        type: Number,
        default: 5,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      allowHalfPoints: {
        type: Boolean,
        default: false,
      },
      colors: {
        type: Array,
        default () {
          return ['#999', '#666', '#1890ff']
        },
      },
    },
    data() {
      return {
        currentValue: this.value,
      };
    },
    computed: {
      isDisabled() {
        return this.disabled;
      },
    },
    watch: {
      value(val) {
        this.currentValue = val;
      },
    },
    methods: {
      setValue(val) {
        if (this.isDisabled) return;
        this.$emit('input', val);
        this.$emit('change', val);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
