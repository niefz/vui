# Tabs 标签页

标签页切换组件。

## 何时使用

提供平级的区域将大块内容进行收纳和展现，保持界面整洁。

- 卡片式的页签，提供可关闭的样式，常用于容器顶部。

- 标准线条式页签，用于容器内部的主功能切换，这是最常用的 Tabs。

## 基本用法

:::demo 默认选中某一项。

```html
<Row>
  <Col :span="24">
    <Tabs default-active="配置管理" @tab-click="handleClick">
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

## 主题

:::demo 可以通过 `theme` 设置标签的样式，可选值： `line`、`card`、`border-card`。

```html
<Row>
  <Col :span="3">
    <Select v-model="theme">
      <SelectMenu>
        <SelectMenuOption label="line" value="line"></SelectMenuOption>
        <SelectMenuOption label="card" value="card"></SelectMenuOption>
        <SelectMenuOption label="border-card" value="border-card"></SelectMenuOption>
      </SelectMenu>
    </Select>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Tabs :theme="theme" @tab-click="handleClick">
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

## 大小

:::demo 大号页签用在页头区域，小号用在弹出框等较狭窄的容器内。

```html
<Row>
  <Col :span="3">
    <Select v-model="size">
      <SelectMenu>
        <SelectMenuOption label="large" value="large"></SelectMenuOption>
        <SelectMenuOption label="medium" value="medium"></SelectMenuOption>
        <SelectMenuOption label="small" value="small"></SelectMenuOption>
        <SelectMenuOption label="mini" value="mini"></SelectMenuOption>
      </SelectMenu>
    </Select>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Tabs :size="size" @tab-click="handleClick">
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

## 位置

:::demo 可以通过 `placement` 设置标签的位置，可选值： `top`、`right`、`bottom`、`left`。

```html
<Row>
  <Col :span="3">
    <Select v-model="placement">
      <SelectMenu>
        <SelectMenuOption label="top" value="top"></SelectMenuOption>
        <SelectMenuOption label="right" value="right"></SelectMenuOption>
        <SelectMenuOption label="left" value="left"></SelectMenuOption>
      </SelectMenu>
    </Select>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Tabs :placement="placement" @tab-click="handleClick">
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

:::demo 通过 `icon` 属性，指定标签页的图标。

```html
<Row>
  <Col :span="24">
    <Tabs @tab-click="handleClick">
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

## 自定义标签页

:::demo 可以通过 `slot` 来实现自定义标签页的内容。

```html
<Row>
  <Col :span="24">
    <Tabs @tab-click="handleClick">
      <template slot="nav">
        <TabsNav name="我的行程">
          <Icon icon="v-icon-calendar-o"></Icon>我的行程
        </TabsNav>
        <TabsNav label="配置管理" name="配置管理" disabled></TabsNav>
        <TabsNav label="角色管理" name="角色管理"></TabsNav>
        <TabsNav label="我的工作台" name="我的工作台"></TabsNav>
      </template>
      <template slot="content">
        <TabsPanel name="我的行程">我的行程</TabsPanel>
        <TabsPanel name="配置管理">配置管理</TabsPanel>
        <TabsPanel name="角色管理">角色管理</TabsPanel>
        <TabsPanel name="我的工作台">我的工作台</TabsPanel>
      </template>
    </Tabs>
  </Col>
</Row>
```
:::

## 附加内容

:::demo 可以在页签右边添加附加内容。

```html
<Row>
  <Col :span="24">
    <Tabs @tab-click="handleClick">
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

## 动态增减标签页

:::demo 动态增、减标签页。

```html
<Row>
  <Col :span="24">
    <Tabs v-model="activeName" @tab-remove="handleTabRemove" @tab-click="handleClick" closable>
      <template slot="nav">
        <TabsNav :label="tab.label" :name="tab.name" :disabled="tab.disabled" :key="tab.name" v-for="tab in tabs"></TabsNav>
      </template>
      <template slot="extra">
        <Button @click="handleIncrease">新增</Button>
      </template>
      <template slot="content">
        <TabsPanel :name="tab.name" :key="tab.name" v-for="tab in tabs">{{tab.content}}</TabsPanel>
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
    <Tabs @tab-click="handleClick">
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

## API

Tabs props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| theme | 风格类型 | string | `line` `card` `border-card` | line |
| size | 大小 | string | `large` `medium` `small` `mini` | small |
| placement | 页签位置 | string | `top` `right` `bottom` `left` | top |
| default-active | 初始化选中标签页的 name | string | - | 第一个标签页的 name |
| closable | 标签是否可关闭 | boolean | - | false |
| disabled | 标签是否禁用 | boolean | - | false |

Tabs events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| tab-click | tab 被选中时触发 | 被选中的标签 tab 实例 |
| tab-remove | tab 被移除时触发 | 被删除的标签的 name |

Tabs slot

| 名称 | 说明 |
|---- |---- |
| extra | 标签页附加内容 |
| nav | 标签页 |
| content | 标签页面板 |

TabsNav props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| label | 标签页内容 | string | - | - |
| name | 标签页的 name | string | - | - |
| icon | 标签页的图标 | string | - | - |
| closable | 标签是否可关闭 | boolean | - | false |
| disabled | 标签是否禁用 | boolean | - | false |

TabsNav slot

| 名称 | 说明 |
|---- |---- |
| 无 | 标签页内容 |

TabsPanel props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| name | 对应标签页的 name 标识符 | string | - | - |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Icon from '@/components/icon';
  import Button from '@/components/button';
  import Select from '@/components/select';
  import SelectMenu from '@/components/select-menu';
  import SelectMenuOption from '@/components/select-menu-option';
  import Tabs from '@/components/tabs';
  import TabsNav from '@/components/tabs-nav';
  import TabsPanel from '@/components/tabs-panel';

  export default {
    components: {
      Row,
      Col,
      Icon,
      Button,
      Select,
      SelectMenu,
      SelectMenuOption,
      Tabs,
      TabsNav,
      TabsPanel,
    },
    data() {
      return {
        theme: 'line',
        size: 'small',
        placement: 'top',
        activeName: '',
        tabIndex: 0,
        tabs: [
          {
            label: '未处理任务',
            name: '未处理任务',
            content: '未处理任务',
          },
          {
            label: '已处理任务',
            name: '已处理任务',
            content: '已处理任务',
            disabled: true,
          },
          {
            label: '未处理消息',
            name: '未处理消息',
            content: '未处理消息',
          },
        ],
      };
    },
    methods: {
      handleClick(val) {
        console.log(val);
      },
      handleIncrease() {
        this.tabIndex += 1;
        this.tabs.push({
          label: `标签${this.tabIndex}`,
          name: `标签${this.tabIndex}`,
          content: `Content of 标签${this.tabIndex}`,
        });
        this.activeName = `标签${this.tabIndex}`;
      },
      handleTabRemove(targetName) {
        this.tabs = this.tabs.filter(tab => tab.name !== targetName);
      },
    },
  };
</script>