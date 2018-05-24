# Tabs 标签页

选项卡切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。

- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

## 基础用法

:::demo 默认选中第一项。

```html
<Row>
  <Col :span="24">
    <Tabs placement="top" default-active="配置管理" @tab-click="handleClick">
      <template slot="nav">
        <TabsNav label="用户管理" name="用户管理"></TabsNav>
        <TabsNav label="配置管理" name="配置管理"></TabsNav>
        <TabsNav label="角色管理" name="角色管理"></TabsNav>
        <TabsNav label="我的工作台" name="我的工作台"></TabsNav>
      </template>
      <template slot="content">
        <TabsPanel name="用户管理">用户管理</TabsPanel>
        <TabsPanel name="配置管理">配置管理</TabsPanel>
        <TabsPanel name="角色管理">角色管理</TabsPanel>
        <TabsPanel name="我的工作台">我的工作台</TabsPanel>
      </template>
    </Tabs>
  </Col>
</Row>
```
:::

## 禁用项

:::demo 禁用某一项。

```html
<Row>
  <Col :span="24">
    <Tabs placement="top" @tab-click="handleClick">
      <template slot="nav">
        <TabsNav label="用户管理" name="用户管理"></TabsNav>
        <TabsNav label="配置管理" name="配置管理" disabled></TabsNav>
        <TabsNav label="角色管理" name="角色管理"></TabsNav>
        <TabsNav label="我的工作台" name="我的工作台"></TabsNav>
      </template>
      <template slot="content">
        <TabsPanel name="用户管理">用户管理</TabsPanel>
        <TabsPanel name="配置管理">配置管理</TabsPanel>
        <TabsPanel name="角色管理">角色管理</TabsPanel>
        <TabsPanel name="我的工作台">我的工作台</TabsPanel>
      </template>
    </Tabs>
  </Col>
</Row>
```
:::

## 带图标的标签

:::demo 带图标的标签。

```html
<Row>
  <Col :span="24">
    <Tabs placement="top" @tab-click="handleClick">
      <template slot="nav">
        <TabsNav label="用户管理" name="用户管理" icon="v-icon-user"></TabsNav>
        <TabsNav label="我的工作台" name="我的工作台" icon="v-icon-user"></TabsNav>
      </template>
      <template slot="content">
        <TabsPanel name="用户管理">用户管理</TabsPanel>
        <TabsPanel name="我的工作台">我的工作台</TabsPanel>
      </template>
    </Tabs>
  </Col>
</Row>
```
:::

## 附加内容

:::demo 可在页签右边添加附加内容。

```html
<Row>
  <Col :span="24">
    <Tabs placement="top" @tab-click="handleClick">
      <template slot="nav">
        <TabsNav label="用户管理" name="用户管理"></TabsNav>
        <TabsNav label="配置管理" name="配置管理" disabled></TabsNav>
        <TabsNav label="角色管理" name="角色管理"></TabsNav>
        <TabsNav label="我的工作台" name="我的工作台"></TabsNav>
      </template>
      <template slot="extra">
        <Button>附加操作</Button>
      </template>
      <template slot="content">
        <TabsPanel name="用户管理">用户管理</TabsPanel>
        <TabsPanel name="配置管理">配置管理</TabsPanel>
        <TabsPanel name="角色管理">角色管理</TabsPanel>
        <TabsPanel name="我的工作台">我的工作台</TabsPanel>
      </template>
    </Tabs>
  </Col>
</Row>
```
:::

## API

Tabs props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| theme | 风格类型 | string | `line` ``card` `border-card` | line |
| size | 大小 | string | `large` `medium` `small` `mini` | small |
| placement | 页签位置 | string | `top` `right` `bottom` `left` | top |
| default-active | 初始化选中选项卡的 name | string | - | 第一个选项卡的 name |
| closable | 标签是否可关闭 | boolean | - | false |
| disabled | 标签是否禁用 | boolean | - | false |

Tabs slot

| 名称 | 说明 |
|---- |---- |
| extra | 选项卡附加内容 |
| nav | 选项卡 |
| content | 选项卡面板 |

TabsNav props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| label | 选项卡的文本 | string | - | - |
| name | 选项卡的 name | string | - | - |
| icon | 选项卡的图标 | string | - | - |
| closable | 标签是否可关闭 | boolean | - | false |
| disabled | 标签是否禁用 | boolean | - | false |

TabsPanel props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| name | 对应选项卡的 name 标识符 | string | - | - |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Tabs from '@/components/tabs';
  import TabsNav from '@/components/tabs-nav';
  import TabsPanel from '@/components/tabs-panel';

  export default {
    components: {
      Row,
      Col,
      Button,
      Tabs,
      TabsNav,
      TabsPanel,
    },
    data() {
      return {
        active: '配置管理',
      };
    },
    methods: {
      handleClick(val) {
        this.active = val;
      },
    },
  };
</script>