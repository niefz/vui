# Color 色彩

为了避免视觉传达差异，Free-ui 使用一套特定的调色板作为设计和开发规范，为你所搭建的产品提供一致的视觉感受。

## 主色

主要颜色是鲜艳、友好的蓝色，代表技术的专业能力，沉稳、内涵、低调简约，且包容万物。

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

<table class="font-color">
  <thead>
    <tr>
      <td>类型</td>
      <td>浅色背景下</td>
      <td class="text-regular dark">深色背景下</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="title">Title</td> 
      <td class="title light">#262626</td>
      <td class="title dark">#FFFFFF</td>
    </tr>
    <tr>
      <td class="text-regular">Primary Text</td> 
      <td class="text-regular light">#595959</td>
      <td class="text-regular dark">#D9D9D9</td>
    </tr>
    <tr>
      <td class="text-sub">Secondary Text</td> 
      <td class="text-sub light">#8C8C8C</td>
      <td class="text-sub dark">#A6A6A6</td>
    </tr>
    <tr>
      <td class="text-disabled">Disabled</td>
      <td class="text-disabled light">#BFBFBF</td>
      <td class="text-disabled dark">#737373</td>
    </tr>
    <tr>
      <td class="text-link">Link</td>
      <td class="text-link light">#1890FF</td>
      <td class="text-link dark">#737373</td>
    </tr>
    <tr>
      <td class="border">Border</td>
      <td class="border light">#D9D9D9</td>
      <td class="border dark">#404040</td>
    </tr>
    <tr>
      <td class="divider">Dividers</td>
      <td class="divider light">#E8E8E8</td>
      <td class="divider dark">#262626</td>
    </tr>
    <tr>
      <td class="background">Background</td>
      <td class="background light">#F5F5F5</td>
      <td class="background dark">#171717</td>
    </tr>
    <tr>
      <td class="thead">Table Header</td>
      <td class="thead light">#FAFAFA</td>
      <td class="thead dark">#0A0A0A</td>
    </tr>
  </tbody>
</table>

<style>
  .font-color { width: 100%; }
  .font-color th, .font-color td { padding: 15px; border-bottom: 1px solid #D9D9D9; }
  .font-color th.dark, .font-color td.dark { border-color: #002140; }
  .dark { background-color: #002140; }
  .title.light { color: #262626; }
  .title.dark { color: #FFFFFF; }
  .text-regular { font-size: 12px; }
  .text-regular.light { color: #595959; }
  .text-regular.dark { color: #D9D9D9; }
  .text-sub.light { color: #8C8C8C; }
  .text-sub.dark { color: #A6A6A6; }
  .text-disabled.light { color: #BFBFBF; }
  .text-disabled.dark { color: #737373; }
  .text-link.light { color: #1890FF; }
  .text-link.dark { color: #737373; }
  .border.light { color: #D9D9D9; }
  .border.dark { color: #404040; }
  .divider.light { color: #E8E8E8; }
  .divider.dark { color: #262626; }
  .background.light { color: #F5F5F5; }
  .background.dark { color: #171717; }
  .thead.light { color: #FAFAFA; }
  .thead.dark { color: #0A0A0A; }
</style>

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
<style lang="scss" scoped>
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
</style>