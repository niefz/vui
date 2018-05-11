<template>
  <div
    class="demo"
    :class="[{ 'hover': hovering || isExpanded }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <slot name="source"></slot>
    <div class="description">
      <slot></slot>
      <div
        ref="control"
        class="code-control"
        @click="isExpanded = !isExpanded">
        <i class="v-icon icon-code"></i>
      </div>
    </div>
    <div ref="code" class="code">
      <slot name="highlight"></slot>
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
<style rel="stylesheet/scss" lang="scss">
  .demo {
    position: relative;
    border: dashed 1px #E8E8E8;
    border-radius: 3px;
    transition: .2s;
    &.hover {
      border-color: #1890FF;
    }
    .source {
      padding: 20px;
    }
    .description {
      position: relative;
      padding: 20px;
      border-top: dashed 1px #E8E8E8;
      border-radius: 3px;
      box-sizing: border-box;
      font-size: 12px;
      line-height: 22px;
      color: #595959;
      word-break: break-all;
      background-color: #FFFFFF;
      p {
        code {
          display: inline-block;
          height: 26px;
          margin: 0 5px;
          padding: 0 5px;
          background-color: #F5F5F5;
          border-radius: 3px;
          font-size: 12px;
          line-height: 26px;
          color: #595959;
        }
      }
    }
    .code {
      height: 0;
      overflow: hidden;
      transition: height .2s;
      .highlight {
        padding: 20px;
        border-top: dashed 1px #E8E8E8;
        background-color: #FAFAFA;
        .hljs {
          padding: 1.2em 1.4em;
          line-height: 2em;
          .hljs-name {
            color: #2973b7;
          }
          .hljs-attr {
            color: #2973b7;
          }
          .hljs-string {
            color: #42b983;
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
        color: #1890FF;
        background-color: #FAFAFA;
      }
    }
    code {
      font-weight: 400;
      font-family: "Roboto Mono", Monaco, courier, monospace;
      -webkit-font-smoothing: initial;
    }
  }
</style>