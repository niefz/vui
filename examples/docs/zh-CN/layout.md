# Layout 布局

协助进行页面级整体布局。

## 设计规则

### 尺寸

一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。

- 顶部导航（大部分系统）：一级导航高度 `64px`，二级导航 `48px`。
- 顶部导航（展示类页面）：一级导航高度 `80px`，二级导航 `56px`。
- 顶部导航高度的范围计算公式为：`(48+8n)px`。
- 侧边导航宽度的范围计算公式：`(200+8n)px`。

### 交互

- 一级导航和末级的导航需要在可视化的层面被强调出来；
- 当前项应该在呈现上优先级最高；
- 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
- 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。

### 视觉

导航样式上需要根据信息层级合理的选择样式：

- **大色块强调**

  建议用于底色为深色系时，当前页面父级的导航项。

- **高亮火柴棍**

  当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

- **字体高亮变色**

  从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

- **字体放大**

  `12px`、`14px` 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

## 组件概述

- `Layout`：布局容器，其下可嵌套 `Header` `Aside` `Content` `Footer` 或 `Layout` 本身，可以放在任何父容器中。
- `Header`：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Aside`：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Content`：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。
- `Footer`：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 `Layout` 中。

## 常见布局

:::demo 典型的页面布局。

```html
<Row>
  <Layout>
    <Header>Header</Header>
    <Layout>
      <Aside>Aside</Aside>
      <Content>Content</Content>
    </Layout>
    <Footer>Footer</Footer>
  </Layout>
</Row>
<Row>
  <Layout>
    <Aside>Aside</Aside>
    <Layout>
      <Header>Header</Header>
      <Content>Content</Content>
      <Footer>Footer</Footer>
    </Layout>
  </Layout>
</Row>
```
:::

## 属性值

Header

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| height | 顶部高度 | string | - | 64px |

Aside

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| float | 侧边栏浮动 | string | `left` `right` | left |
| width | 侧边栏宽度 | string | - | 200px |

Footer

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| height | 底部高度 | string | - | 64px |

<script>
  import Row from '@/components/row';
  import Layout from '@/components/layout';
  import Header from 'free-vui/src/components/header';
  import Aside from 'free-vui/src/components/aside';
  import Content from 'free-vui/src/components/content';
  import Footer from 'free-vui/src/components/footer';

  export default {
    components: {
      Row,
      Layout,
      Header,
      Aside,
      Content,
      Footer,
    },
  };
</script>
<style>
  .v-header {
    background-color: #1890FF;
    color: #FFFFFF;
    line-height: 64px;
    text-align: center;
  }
  .v-aside {
    min-height: 120px;
    background-color: #40A9FF;
    line-height: 120px;
    color: #FFFFFF;
    text-align: center;
  }
  .v-content {
    min-height: 120px;
    background-color: #096DD9;
    line-height: 120px;
    color: #FFFFFF;
    text-align: center;
  }
  .v-footer {
    background-color: #1890FF;
    color: #FFFFFF;
    line-height: 64px;
    text-align: center;
  }
</style>