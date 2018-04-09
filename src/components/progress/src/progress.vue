<template>
  <div
    class="v-progress"
    :class="[
      'v-progress--' + shape,
      'v-progress--' + status,
      {
        ['v-progress--hide-info']: hideInfo,
        ['v-progress--text-inside']: textInside,
      }
    ]"
    role="progressbar"
    :aria-valuenow="percentage"
    aria-valuemin="0"
    aria-valuemax="100">
    <div class="v-progress-bar" v-if="shape === 'line'">
      <div class="v-progress-bar--outer" :style="{ height: strokeWidth + 'px' }">
        <div class="v-progress-bar--inner" :style="{ width: percentage + '%' }">
          <div class="v-progress-bar--inner-text" v-if="!hideInfo && textInside">
            <template v-if="$slots.default"><slot></slot></template>
            <template v-else>{{percentage}}%</template>
          </div>
        </div>
      </div>
    </div>
    <div class="v-progress-circle" :style="{ width: width + 'px', height: width + 'px' }" v-else>
      <svg viewBox="0 0 100 100">
        <path
          class="v-progress-circle--track"
          :d="trackPath"
          stroke="#F5F5F5"
          :stroke-width="strokeWidth"
          fill="none"
          :style="trailPathStyle"></path>
        <path
          class="v-progress-circle--path"
          :d="trackPath"
          stroke-linecap="round"
          :stroke="strokeColor"
          :stroke-width="percentage === 0 ? 0 : strokeWidth"
          fill="none"
          :style="strokePathStyle"></path>
      </svg>
    </div>
    <div
      class="v-progress-text"
      :style="{ fontSize: progressTextSize + 'px' }"
      v-if="!hideInfo && !textInside">
      <template v-if="$slots.default"><slot></slot></template>
      <template v-else>
        <v-icon v-if="icon" :icon="icon"></v-icon>
        <template v-else>{{percentage}}%</template>
      </template>
    </div>
  </div>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'Progress',
    componentName: 'Progress',
    components: {
      VIcon: Icon,
    },
    props: {
      shape: {
        type: String,
        default: 'line',
        validator: val => ['line', 'circle', 'dashboard'].indexOf(val) > -1,
      },
      status: {
        type: String,
        default: 'normal',
      },
      strokeWidth: {
        type: Number,
        default: 6,
      },
      percentage: {
        type: Number,
        default: 0,
        required: true,
        validator: val => val >= 0 && val <= 100,
      },
      width: {
        type: Number,
        default: 120,
      },
      icon: {
        type: String,
        default: '',
      },
      progressTextSize: {
        type: String,
        default: '12',
      },
      hideInfo: {
        type: Boolean,
        default: false,
      },
      textInside: {
        type: Boolean,
        default: false,
      },
    },
    computed: {
      radius() {
        return 50 - (this.strokeWidth / 2);
      },
      perimeter() {
        return 2 * Math.PI * this.radius;
      },
      gapDegree() {
        return this.shape === 'dashboard' ? 75 : 0;
      },
      trackPath() {
        let trackPath;
        const radius = this.radius;
        switch (this.shape) {
          case 'circle':
            trackPath = `M 50, 50 m 0, ${-radius} a ${radius}, ${radius} 0 1 1 0, ${radius * 2} a ${radius}, ${radius} 0 1 1 0, ${-radius * 2}`;
            break;
          case 'dashboard':
            trackPath = `M 50, 50 m 0, ${radius} a ${radius}, ${radius} 0 1 1 0, ${-radius * 2} a ${radius}, ${radius} 0 1 1 0, ${radius * 2}`;
            break;
          default:
            break;
        }
        return trackPath;
      },
      trailPathStyle() {
        const perimeter = this.perimeter;
        const gapDegree = this.gapDegree;
        return {
          strokeDasharray: `${perimeter - gapDegree}px ${perimeter}px`,
          strokeDashoffset: `-${gapDegree / 2}px`,
          transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s',
        };
      },
      strokePathStyle() {
        const perimeter = this.perimeter;
        const percentage = this.percentage;
        const gapDegree = this.gapDegree;
        return {
          strokeDasharray: `${(percentage / 100) * (perimeter - gapDegree)}px ${perimeter}px`,
          strokeDashoffset: `-${gapDegree / 2}px`,
          transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s',
        };
      },
      strokeColor() {
        let strokeColor;
        switch (this.status) {
          case 'success':
            strokeColor = '#52C41A';
            break;
          case 'exception':
            strokeColor = '#F5222D';
            break;
          default:
            strokeColor = '#148EF6';
            break;
        }
        return strokeColor;
      },
    },
  };
</script>
