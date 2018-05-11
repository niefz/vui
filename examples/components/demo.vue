<template>
  <div
    class="demo"
    :class="[{ 'hover': hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false">
    <slot name="source"></slot>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <slot name="highlight"></slot>
    </div>
    <div
      class="demo-control"
      ref="control"
      :class="{ 'is-fixed': fixedControl }"
      @click="isExpanded = !isExpanded">
      <transition name="arrow-slide">
        <i class="v-icon" :class="[iconClass, { 'hovering': hovering || isExpanded }]"></i>
      </transition>
      <transition name="text-slide">
        <span v-show="hovering || isExpanded">{{ controlText }}</span>
      </transition>
    </div>
  </div>
</template>
<style lang="scss" scoped>
  .demo {
    border: solid 1px #D9D9D9;
    border-radius: 3px;
    transition: .2s;
    &.hover {
      box-shadow: 0 0 8px 0 rgba(232, 237, 250, .6), 0 2px 4px 0 rgba(232, 237, 250, .5);
    }
    code {
      font-family: Menlo, Monaco, Consolas, Courier, monospace;
    }
    .demo-button {
      float: right;
    }
    .source {
      padding: 20px;
    }
    .meta {
      height: 0;
      border-top: solid 1px #E8E8E8;
      background-color: #FAFAFA;
      overflow: hidden;
      transition: height .2s;
    }
    .description {
      margin: 10px;
      padding: 20px;
      border: solid 1px #E8E8E8;
      border-radius: 3px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 22px;
      color: #595959;
      word-break: break-all;
      background-color: #FFFFFF;
      p {
        margin: 0;
        line-height: 26px;
      }
      code {
        display: inline-block;
        height: 18px;
        margin: 0 5px;
        padding: 1px 5px;
        background-color: #FAFAFA;
        border-radius: 3px;
        font-size: 12px;
        line-height: 18px;
        color: #595959;
      }
    }
    .highlight {
      pre {
        margin: 0;
      }
      code {
        max-height: none;
        margin: 0;
        padding: 18px 24px;
        border: none;
        border-radius: 0;
        font-size: 12px;
        line-height: 1.8;
        background-color: #FAFAFA;
        -webkit-font-smoothing: subpixel-antialiased;
        &::before {
          content: none;
        }
      }
    }
    .demo-control {
      position: relative;
      height: 44px;
      margin-top: -1px;
      border-top: solid 1px #E8E8E8;
      background-color: #FFFFFF;
      border-bottom-left-radius: 3px;
      border-bottom-right-radius: 3px;
      box-sizing: border-box;
      color: #D9D9D9;
      text-align: center;
      cursor: pointer;
      &.is-fixed {
        position: fixed;
        bottom: 0;
        width: 810px;
      }
      i {
        font-size: 14px;
        line-height: 44px;
        transition: .3s;
        &.hovering {
          transform: translateX(-40px);
        }
      }
      > span {
        display: inline-block;
        position: absolute;
        transform: translateX(-30px);
        font-size: 14px;
        line-height: 44px;
        transition: .3s;
      }
      &:hover {
        color: #1890FF;
        background-color: #FAFAFA;
      }
      & .text-slide-enter,
      & .text-slide-leave-active {
        opacity: 0;
        transform: translateX(10px);
      }
    }
  }
</style>
<script type="text/babel">
  import Language from '../i18n/component.json';

  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false,
        fixedControl: false,
        scrollParent: null,
      };
    },
    computed: {
      lang() {
        return this.$route.path.split('/')[1];
      },
      langConfig() {
        return Language.filter(config => config.lang === this.lang)[0]['demo'];
      },
      iconClass() {
        return this.isExpanded ? 'icon-caret-top' : 'icon-caret-bottom';
      },
      controlText() {
        return this.isExpanded ? this.langConfig['hide-text'] : this.langConfig['show-text'];
      },
      codeArea() {
        return this.$el.getElementsByClassName('meta')[0];
      },
      codeAreaHeight() {
        if (this.$el.getElementsByClassName('description').length > 0) {
          return this.$el.getElementsByClassName('description')[0].clientHeight +
            this.$el.getElementsByClassName('highlight')[0].clientHeight + 20;
        }
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      }
    },
    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
        if (!val) {
          this.fixedControl = false;
          this.$refs.control.style.left = '0';
          this.removeScrollHandler();
          return;
        }
        setTimeout(() => {
          this.scrollParent = document.querySelector('.v-scrollbar--wrap');
          this.scrollParent && this.scrollParent.addEventListener('scroll', this.scrollHandler);
          this.scrollHandler();
        }, 200);
      }
    },
    methods: {
      scrollHandler() {
        const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
        this.fixedControl = bottom > document.documentElement.clientHeight &&
          top + 44 <= document.documentElement.clientHeight;
        this.$refs.control.style.left = this.fixedControl ? `${ left }px` : '0';
      },
      removeScrollHandler() {
        this.scrollParent && this.scrollParent.removeEventListener('scroll', this.scrollHandler);
      }
    },
    mounted() {
      this.$nextTick(() => {
        let highlight = this.$el.getElementsByClassName('highlight')[0];
        if (this.$el.getElementsByClassName('description').length === 0) {
          highlight.style.width = '100%';
          highlight.borderRight = 'none';
        }
      });
    },
    beforeDestroy() {
      this.removeScrollHandler();
    }
  };
</script>