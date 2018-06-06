# Menu 导航菜单

为网站提供导航功能的菜单。

## 何时使用

导航菜单一般分为顶部导航和侧边导航，用户依赖导航在各个页面中进行跳转。

- 顶部导航：提供全局性的类目和功能；
- 侧栏导航：提供多级结构来收纳和排列网站架构。

## 顶部导航

:::demo 水平导航菜单 `mode="horizontal"`。

```html
<Row>
  <Col :span="24">
    <Menu mode="horizontal" theme="dark" :height="64">
      <MenuItem index="index">首页</MenuItem>
      <MenuItem index="design">设计</MenuItem>
      <MenuItem index="changelog">组件</MenuItem>
      <MenuItem index="PRO">PRO</MenuItem>
    </Menu>
  </Col>
</Row>
```
:::

## 侧栏导航 - 内嵌

:::demo 垂直导航菜单，可以内嵌子菜单。

```html
<Row>
  <Col :span="12">
    <Menu>
      <template v-for="(nav, index) in navigations">
        <MenuItem :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </MenuItem>
        <MenuSub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
          </template>
          <template v-if="nav.child">
            <MenuItem
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </MenuItem>
          </template>
          <template v-if="nav.groups">
            <MenuGroup
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <MenuItem
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </MenuItem>
            </MenuGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## 侧栏导航 - 弹出

:::demo 垂直导航菜单，可以内嵌子菜单。

```html
<Row>
  <Col :span="12">
    <Menu>
      <template v-for="(nav, index) in navigations">
        <MenuItem :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </MenuItem>
        <MenuSub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
          </template>
          <template v-if="nav.child">
            <MenuItem
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </MenuItem>
          </template>
          <template v-if="nav.groups">
            <MenuGroup
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <MenuItem
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </MenuItem>
            </MenuGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## 手风琴模式

:::demo 使用 `accordion` 属性，开启手风琴模式。

```html
<Row>
  <Col :span="12">
    <Menu>
      <template v-for="(nav, index) in navigations">
        <MenuItem :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </MenuItem>
        <MenuSub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
          </template>
          <template v-if="nav.child">
            <MenuItem
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </MenuItem>
          </template>
          <template v-if="nav.groups">
            <MenuGroup
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <MenuItem
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </MenuItem>
            </MenuGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## 折叠

:::demo 导航菜单缩起/展开。

```html
<Row>
  <Col :span="12">
    <Menu>
      <template v-for="(nav, index) in navigations">
        <MenuItem :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </MenuItem>
        <MenuSub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
          </template>
          <template v-if="nav.child">
            <MenuItem
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </MenuItem>
          </template>
          <template v-if="nav.groups">
            <MenuGroup
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <MenuItem
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </MenuItem>
            </MenuGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## 主题

:::demo 内建 `light` `dark` `primary` 主题，可通过 `theme` 属性选择，默认使用 `light` 主题。

```html
<Row>
  <Col :span="12">
    <Menu>
      <template v-for="(nav, index) in navigations">
        <MenuItem :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </MenuItem>
        <MenuSub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
          </template>
          <template v-if="nav.child">
            <MenuItem
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </MenuItem>
          </template>
          <template v-if="nav.groups">
            <MenuGroup
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <MenuItem
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </MenuItem>
            </MenuGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## 路由模式

:::demo 设置 `to` 属性，并以该值作为 path 进行路由跳转。

```html
<Row>
  <Col :span="12">
    <Menu>
      <template v-for="(nav, index) in navigations">
        <MenuItem :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </MenuItem>
        <MenuSub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
          </template>
          <template v-if="nav.child">
            <MenuItem
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </MenuItem>
          </template>
          <template v-if="nav.groups">
            <MenuGroup
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <MenuItem
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </MenuItem>
            </MenuGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## 链接跳转

:::demo 通过 `href` 属性进行链接跳转，，规定 `target` 在何处打开链接。

```html
<Row>
  <Col :span="12">
    <Menu>
      <template v-for="(nav, index) in navigations">
        <MenuItem :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </MenuItem>
        <MenuSub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
          </template>
          <template v-if="nav.child">
            <MenuItem
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </MenuItem>
          </template>
          <template v-if="nav.groups">
            <MenuGroup
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <MenuItem
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </MenuItem>
            </MenuGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## API

Menu props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| mode | 模式 | string | `horizontal` `vertical` | vertical |
| theme | 主题颜色 | number | `light` `dark` `primary` | light |
| height | 菜单的高度 | number | - | 40 |
| indent | 菜单缩进的宽度 | number | - | 20 |
| accordion | 是否开启手风琴模式，开启后每次至多展开一个子菜单 | boolean | - | false |
| default-active | 当前激活菜单的 index | string | - | - |
| default-opens | 展开的 Submenu 的 index 集合 | array | - | - |

MenuSub props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| index | 唯一标志 | string | - | - |
| disabled | 是否禁用 | boolean | - | false |

MenuSub slot

| 名称 | 说明 |
|---- |---- |
| title | 子菜单标题 |
| 无 | 菜单项 |

MenuGroup slot

| 名称 | 说明 |
|---- |---- |
| title | 分组标题 |
| 无 | 菜单项 |

MenuItem props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| index | 唯一标志 | string | - | - |
| to | 路由跳转对象，同 vue-router 中的 to | string \/ object | - | - |
| replace | 路由模式下，是否不需要向 history 添加新记录 | boolean | - | false |
| href | 链接跳转 | number | - | - |
| target | 链接跳转模式下，规定在何处打开链接 | number | - | - |
| disabled | 是否可用 | boolean | - | false |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Menu from '@/components/menu';
  import MenuSub from '@/components/menu-sub';
  import MenuGroup from '@/components/menu-group';
  import MenuItem from '@/components/menu-item';
  import navigations from '../../nav.json';

  export default {
    components: {
      Row,
      Col,
      Menu,
      MenuSub,
      MenuItem,
      MenuGroup,
    },
    data() {
      return {
        navigations,
      };
    },
    methods: {
    },
  };
</script>