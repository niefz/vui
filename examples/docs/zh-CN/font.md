# Font 字体

字体是体系化界面设计中最基本的构成之一。

我们的用户通过文本来理解内容和完成工作，科学的字体系统将大大提升用户的阅读体验及工作效率。Free-ui 字体方案，是基于『动态秩序』的设计原则，结合了自然对数以及音律的规则得出的，再经过了大量的中后台产品验证之后，推荐给大家。
在中后台视觉体系中定义字体系统，我们建议从下面五个方面出发：

1. 字体家族
2. 主字体
3. 字阶与行高
4. 字重
5. 字体颜色

## 字体家族

Free-ui 的字体家族中优先使用系统默认的界面字体，同时提供了一套利于屏显的备用字体库，来维护在不同平台以及浏览器的显示下，字体始终保持良好的易读性和可读性，体现了友好、稳定和专业的特性。

```css
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei",
             SimSun, sans-serif;
```

另外，在中后台系统中，数字经常需要进行纵向对比展示，我们单独将数字的字体设置为 `Tahoma`，使其为等宽字体。

## 主字体

在 Free-ui 的视觉体系中，我们建议的主要字体为 12，以保证在多数常用显示器上的用户阅读效率最佳。

## 字阶与行高

字阶和行高决定着一套字体系统的动态与秩序之美。字阶是指一系列有规律的不同尺寸的字体。行高可以理解为一个包裹在字体外面的无形的盒子。

Free-ui 受到 5 音阶以及自然律的启发定义了 10 个不同尺寸的字体以及与之相对应的行高。

<table class="font-size">
  <tbody>
    <tr>
      <td class="thead">Font Size</td>
      <td>12</td> 
      <td>14</td> 
      <td>16</td> 
      <td>20</td> 
      <td>24</td> 
      <td>30</td> 
      <td>38</td> 
      <td>46</td> 
      <td>56</td> 
      <td>68</td> 
      <td>...</td> 
    </tr>
    <tr>
      <td class="thead">Line Height</td>
      <td>18</td> 
      <td>22</td>
      <td>26</td> 
      <td>30</td>
      <td>34</td> 
      <td>40</td>
      <td>48</td>
      <td>56</td>
      <td>66</td>
      <td>78</td>
      <td>...</td>
    </tr>
  </tbody>
</table>
<style scoped>
.font-size { width: 100%; border: 1px solid #D9D9D9; }
.font-size td { padding: 15px 20px; border-bottom: 1px solid #D9D9D9; }
.font-size td.thead { border-right: 1px solid #D9D9D9; background-color: #FAFAFA; }
</style>

建议在一个系统设计中（展示型页面除外），字阶的选择尽量控制在 3-5 种之间，保持克制的原则。

## 字重

字重的选择同样基于秩序、稳定、克制的原则。多数情况下，只出现 regular 以及 medium 的两种字体重量，分别对应代码中的 400 和 500。在英文字体加粗的情况下会采用 semibold 的字体重量，对应代码中的 600。

<div class="font-weight">
  <div class="font-weight--inner">
    Free-ui
    <div class="name regular">Regular 400</div>
  </div>
  <div class="font-weight--inner">
    Free-ui
    <div class="name medium">Medium 500</div>
  </div>
  <div class="font-weight--inner">
    Free-ui
    <div class="name semibold">Semibold 600</div>
  </div>
</div>
<style scoped>
  .font-weight { display: flex; }
  .font-weight--inner {
    position: relative;
    width: calc(33.33% - 20px);
    height: 200px;
    margin-right: 20px;
    border: 1px solid #D9D9D9;
    font-size: 40px;
    line-height: 180px;
    text-align: center;
  }
  .font-weight--inner .name {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    font-size: 14px;
    line-height: 60px;
  }
  .name.regular { font-weight: 400; }
  .name.medium { font-weight: 500; }
  .name.semibold { font-weight: 600; }
</style>

## 字体颜色

文本颜色如果和背景颜色太接近就会难以阅读。考虑到无障碍设计的需求，我们参考了 WCAG 的标准，将正文文本、标题和背景色之间保持在了 7:1 以上的 AAA 级对比度。

<table class="font-color">
  <thead>
    <tr>
      <td>字体类型</td>
      <td>浅色背景下</td>
      <td class="text-regular dark">深色背景下</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="title">标题</td> 
      <td class="title light">#262626</td>
      <td class="title dark">#FFFFFF</td>
    </tr>
    <tr>
      <td class="text-regular">正文</td> 
      <td class="text-regular light">#595959</td>
      <td class="text-regular dark">#D9D9D9</td>
    </tr>
    <tr>
      <td class="text-sub">辅文</td> 
      <td class="text-sub light">#8C8C8C</td>
      <td class="text-sub dark">#A6A6A6</td>
    </tr>
    <tr>
      <td class="text-disabled">失效</td>
      <td class="text-disabled light">#BFBFBF</td>
      <td class="text-disabled dark">#737373</td>
    </tr>
    <tr>
      <td class="text-link">链接</td>
      <td class="text-link light">#1890FF</td>
      <td class="text-link dark">#1890FF</td>
    </tr>
  </tbody>
</table>
<style scoped>
  .font-color { width: 100%; }
  .font-color th, .font-color td { padding: 15px; border-bottom: 1px solid #D9D9D9; }
  .font-color th.dark, .font-color td.dark { border-color: #002140; }
  .dark { background-color: #002140; }
  .title { font-size: 18px; }
  .title.light { color: #262626; }
  .title.dark { color: #FFFFFF; }
  .text-regular { font-size: 12px; }
  .text-regular.light { color: #595959; }
  .text-regular.dark { color: #D9D9D9; }
  .text-sub { font-size: 12px; }
  .text-sub.light { color: #8C8C8C; }
  .text-sub.dark { color: #A6A6A6; }
  .text-disabled { font-size: 12px; }
  .text-disabled.light { color: #BFBFBF; }
  .text-disabled.dark { color: #737373; }
  .text-link { font-size: 12px; }
  .text-link.light { color: #1890FF; }
  .text-link.dark { color: #737373; }
</style>

## 建议

字体系统的构建，是『动态秩序之美』的第一步。在实际的设计中，我们还有三点建议：

1. <strong>建立体系化的设计思路：</strong>在同一个系统的 UI 设计中先建立体系化的设计思路，对主、次、辅助、标题、展示等类别的字体做统一的规划，再落地到具体场景中进行微调。建立体系化的设计思路有助于强化横向字体落地的一致性，提高字体应用的性价比，减少不必要的样式浪费。
2. <strong>少即是多：</strong>在视觉展现上能够用尽量少的样式去实现设计目的。避免毫无意义的使用大量字阶、颜色、字重强调视觉重点或对比关系。
3. <strong>尝试让字体像音符一样跳跃：</strong>在需要拉开差距的时候可以尝试在字阶表中跳跃的选择字体大小，会令字阶之间产生一种微妙的韵律感。

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';

  export default {
    components: {
      Row,
      Col,
    },
  };
</script>