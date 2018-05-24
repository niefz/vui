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
        <TabsNav label="用户管理" value="用户管理"></TabsNav>
        <TabsNav label="配置管理" value="配置管理"></TabsNav>
        <TabsNav label="角色管理" value="角色管理"></TabsNav>
        <TabsNav label="我的工作台" value="我的工作台"></TabsNav>
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
        <TabsNav label="用户管理" value="用户管理"></TabsNav>
        <TabsNav label="配置管理" value="配置管理" disabled></TabsNav>
        <TabsNav label="角色管理" value="角色管理"></TabsNav>
        <TabsNav label="我的工作台" value="我的工作台"></TabsNav>
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
        <TabsNav label="用户管理" value="用户管理" icon="v-icon-user"></TabsNav>
        <TabsNav label="我的工作台" value="我的工作台" icon="v-icon-user"></TabsNav>
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

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Tabs from '@/components/tabs';
  import TabsNav from '@/components/tabs-nav';
  import TabsPanel from '@/components/tabs-panel';

  export default {
    components: {
      Row,
      Col,
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