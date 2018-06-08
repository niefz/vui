<template>
  <div
    class="demo"
    :class="[{ 'hover': hovering || isExpanded }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source">
      <slot name="source"></slot>
    </div>
    <div class="description">
      <slot></slot>
      <div
        ref="control"
        class="code-control"
        @click="isExpanded = !isExpanded">
        <i class="v-icon-code-o"></i>
      </div>
    </div>
    <div ref="code" class="code">
      <div class="highlight">
        <slot name="highlight"></slot>
      </div>
    </div>
  </div>
</template>
<script>
  import Language from '../i18n/component.json';

  export default {
    data() {
      return {
        hovering: false,
        isExpanded: false,
      };
    },
    computed: {
      lang() {
        return this.$route.path.split('/')[1];
      },
      langConfig() {
        return Language.filter(config => config.lang === this.lang)[0]['demo'];
      },
      codeArea() {
        return this.$el.getElementsByClassName('code')[0];
      },
      codeAreaHeight() {
        return this.$el.getElementsByClassName('highlight')[0].clientHeight;
      }
    },
    watch: {
      isExpanded(val) {
        this.codeArea.style.height = val ? `${ this.codeAreaHeight + 1 }px` : '0';
      },
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
  };
</script>
<style lang="scss">
  @import "../../src/styles/index.scss";

  .demo {
    position: relative;
    border: dashed 1px $color-divider;
    border-radius: 3px;
    transition: .3s;
    &.hover {
      border-color: $color-primary;
    }
    .source {
      position: relative;
      padding: 20px;
    }
    .description {
      position: relative;
      min-height: 67px;
      padding: 20px;
      border-top: dashed 1px $color-divider;
      background-color: $color-white;
      font-size: 12px;
      line-height: 22px;
      word-break: break-all;
      box-sizing: border-box;
    }
    .code {
      height: 0;
      overflow: hidden;
      transition: height .3s;
      .highlight {
        padding: 20px;
        border-top: dashed 1px $color-divider;
        background-color: $color-thead-background;
        .hljs {
          display: block;
          padding: 0;
          background-color: transparent;
          line-height: 2em;
          color: $color-primary;
          overflow: auto;
          .hljs-name {
            color: $color-danger;
          }
          .hljs-attr {
            color: $color-success;
          }
          .hljs-string {
            color: $color-warning;
          }
        }
      }
    }
    .code-control {
      position: absolute;
      right: 20px;
      bottom: 20px;
      width: 26px;
      height: 26px;
      text-align: center;
      cursor: pointer;
      i {
        font-size: 14px;
        line-height: 26px;
      }
      &:hover {
        background-color: $color-thead-background;
        color: $color-primary;
      }
    }
    code {
      font-weight: 400;
      font-family: "Roboto Mono", Monaco, courier, monospace;
      -webkit-font-smoothing: initial;
    }
    & + .demo {
      margin-top: 10px;
    }
  }
</style>
