# Color 色彩

为了避免视觉传达差异，VUI 使用一套特定的调色板作为设计和开发规范，为你所搭建的产品提供一致的外观视觉感受。</p>

## 主色

主要品牌颜色是鲜艳、友好的蓝色。

<v-row>
  <v-col :span="8">
    <div class="color-box primary">Normal<div class="value">#1890FF</div></div>
  </v-col>
  <v-col :span="8">
    <div class="color-box light-primary">Hover<div class="value">#40A9FF</div></div>
  </v-col>
  <v-col :span="8">
    <div class="color-box dark-primary">Active<div class="value">#096DD9</div></div>
  </v-col>
</v-row>

## 辅助色

辅助色是具有代表性的颜色，常用于信息提示，比如成功、警告和失败。

<v-row>
  <v-col :span="8">
    <div class="color-box success">Success<div class="value">#52C41A</div></div>
  </v-col>
  <v-col :span="8">
    <div class="color-box warning">Warning<div class="value">#FAAD14</div></div>
  </v-col>
  <v-col :span="8">
    <div class="color-box danger">Danger<div class="value">#F5222D</div></div>
  </v-col>
</v-row>

 ## 中性色

中性色常用于文本、背景、边框、阴影等，通过运用不同的中性色，来表现层次结构。

<v-row>
  <v-col :span="6">
    <div class="color-box text-link">链接 Link<div class="value">#1890FF</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box text-primary">标题 Title<div class="value">#262626</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box text-regular">正文 Content<div class="value">#595959</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box text-secondary">辅文 Sub Title<div class="value">#8C8C8C</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box text-disabled">失效 Disabled<div class="value">#BFBFBF</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box border">边框 Border<div class="value">#D9D9D9</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box divider">分割线 Divider<div class="value">#E8E8E8</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box background">背景 Background<div class="value">#F5F5F5</div></div>
  </v-col>
  <v-col :span="6">
    <div class="color-box thead">表头 Table Header<div class="value">#FAFAFA</div></div>
  </v-col>
</v-row>

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
    },
  };
</script>
<style rel="stylesheet/scss" lang="sass" scoped>
  .color-box {
    height: 74px;
    margin-top: 10px;
    margin-right: 10px;
    padding: 20px;
    font-size: 14px;
    color: #FFFFFF;
    border-radius: 3px;
    box-sizing: border-box;
  }
  .primary {
    background-color: #1890FF;
  }
  .light-primary {
    background-color: #40A9FF;
  }
  .dark-primary {
    background-color: #096DD9;
  }
  .success {
    background-color: #52C41A;
  }
  .warning {
    background-color: #FAAD14;
  }
  .danger {
    background-color: #F5222D;
  }
  .text-primary {
    background-color: #262626;
  }
  .text-regular {
    background-color: #595959;
  }
  .text-secondary {
    background-color: #8C8C8C;
  }
  .text-link {
    background-color: #1890FF;
  }
  .text-disabled {
    background-color: #BFBFBF;
  }
  .border {
    background-color: #D9D9D9;
  }
  .divider {
    background-color: #E8E8E8;
  }
  .background {
    background-color: #F5F5F5;
  }
  .thead {
    background-color: #FAFAFA;
  }
</style>