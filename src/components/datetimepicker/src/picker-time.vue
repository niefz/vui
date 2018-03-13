<template>
  <div class="v-picker-time">
    <div class="hours">
      <transition-group
        name="slide-up"
        tag="ul"
        ref="hours"
        @scroll.stop="onScroll">
        <li :key="hour" v-for="(hour, key) in 24">
          <em
            class="time-inner"
            :class="{ 'selected': key === hours, 'disabled': hour }"
            @click="handleClick('hours', { value: hour, disabled: false })">
            {{ ('0' + key).slice(-2) }}
          </em>
        </li>
      </transition-group>
    </div>
    <div class="minutes">
      <transition-group
        name="slide-up"
        tag="ul"
        ref="minutes"
        @scroll.stop="onScroll">
        <li :key="minute" v-for="(minute, key) in 60">
          <em
            class="time-inner"
            :class="{ 'selected': key === minutes }"
            @click="handleClick('minutes', { value: minute, disabled: false })">
            {{ ('0' + key).slice(-2) }}
          </em>
        </li>
      </transition-group>
    </div>
    <div class="seconds">
      <transition-group
        name="slide-up"
        tag="ul"
        ref="seconds"
        @scroll.stop="onScroll">
        <li :key="second" v-for="(second, key) in 60">
          <em
            class="time-inner"
            :class="{ 'selected': key === seconds }"
            @click="handleClick('seconds', { value: second, disabled: false })">
            {{ ('0' + key).slice(-2) }}
          </em>
        </li>
      </transition-group>
    </div>
    <div class="select-panel">
      <em class="select-panel__inner">时</em>
      <em class="select-panel__inner">分</em>
      <em class="select-panel__inner">秒</em>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'TimePicker',
    componentName: 'TimePicker',
    data() {
      return {
        moveY: 0,
      };
    },
    props: {
      date: {
        type: Date,
        default: () => new Date(),
      },
    },
    computed: {
      hours() {
        return this.date.getHours();
      },
      minutes() {
        return this.date.getMinutes();
      },
      seconds() {
        return this.date.getSeconds();
      },
    },
    methods: {
      /**
       * 监听滚动
       * @param e
       */
      onScroll(e) {
        this.moveY = e.target.scrollTop;
      },
      /**
       * 定位滚动条
       * @param type
       * @param value
       */
      adjustScrollTop(type, value) {
        const el = this.$refs[type].$el;
        if (el) {
          el.scrollTop = Math.max(0, (value - 1) * 40);
        }
      },
      /**
       * 选择时间
       * @param type
       * @param value
       * @param disabled
       */
      handleClick(type, {value, disabled}) {
        if (!disabled) {
          this.adjustScrollTop(type, value);
        }
      },
    },
  };
</script>