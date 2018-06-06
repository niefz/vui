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
            <MenuItemGroup
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
            </MenuItemGroup>
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
            <MenuItemGroup
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
            </MenuItemGroup>
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
            <MenuItemGroup
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
            </MenuItemGroup>
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
            <MenuItemGroup
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
            </MenuItemGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

## 路由模式

:::demo 指定 `to` 属性，并以该值作为 path 进行路由跳转。

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
            <MenuItemGroup
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
            </MenuItemGroup>
          </template>
        </MenuSub>
      </template>
    </Menu>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Menu from '@/components/menu';
  import MenuSub from '@/components/menu-sub';
  import MenuItem from '@/components/menu-item';
  import MenuItemGroup from '@/components/menu-item-group';
  import navigations from '../../nav.json';

  export default {
    components: {
      Row,
      Col,
      Menu,
      MenuSub,
      MenuItem,
      MenuItemGroup,
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