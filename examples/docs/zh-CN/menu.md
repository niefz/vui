# Menu 菜单

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="12">
    <v-menu>
      <template v-for="(nav, index) in navigations">
        <v-menu-item :index="nav.name" v-if="nav.path">
          {{ nav.name }}
        </v-menu-item>
        <v-menu-sub :index="nav.name" v-else>
          <template slot="title">
            <h4>{{ nav.name }}</h4>
            <i class="v-menu--sub-title-arrow"></i>
          </template>
          <template v-if="nav.child">
            <v-menu-item
              :index="child.name"
              disabled
              :key="index"
              v-for="(child, index) in nav.child">
              {{ child.name }}
            </v-menu-item>
          </template>
          <template v-if="nav.groups">
            <v-menu-item-group
              :index="group.name"
              :key="index"
              v-for="(group, index) in nav.groups">
              <template slot="title">
                <h4>{{ group.name }}</h4>
                <i class="v-submenu--title-arrow"></i>
              </template>
              <v-menu-item
                :index="child.name"
                :key="index"
                v-for="(child, index) in group.child">
                {{ child.name }}
              </v-menu-item>
            </v-menu-item-group>
          </template>
        </v-menu-sub>
      </template>
    </v-menu>
  </v-col>
</v-row>
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
      VRow: Row,
      VCol: Col,
      VMenu: Menu,
      VMenuSub: MenuSub,
      VMenuItem: MenuItem,
      VMenuItemGroup: MenuItemGroup,
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