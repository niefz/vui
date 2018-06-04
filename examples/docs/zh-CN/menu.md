# Menu 菜单

## 基本用法

:::demo 

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