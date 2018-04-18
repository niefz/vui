# Tabs 标签页

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-tabs placement="top" @tab-click="handleClick">
      <template slot="nav">
        <v-tabs-nav label="用户管理" value="用户管理"></v-tabs-nav>
        <v-tabs-nav label="配置管理" value="配置管理" disabled></v-tabs-nav>
        <v-tabs-nav label="角色管理" value="角色管理"></v-tabs-nav>
        <v-tabs-nav label="我的工作台" value="我的工作台"></v-tabs-nav>
      </template>
      <template slot="content">
        <v-tabs-panel name="用户管理">用户管理</v-tabs-panel>
        <v-tabs-panel name="配置管理">配置管理</v-tabs-panel>
        <v-tabs-panel name="角色管理">角色管理</v-tabs-panel>
        <v-tabs-panel name="我的工作台">我的工作台</v-tabs-panel>
      </template>
    </v-tabs>
  </v-col>
</v-row>
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
      VRow: Row,
      VCol: Col,
      VTabs: Tabs,
      VTabsNav: TabsNav,
      VTabsPanel: TabsPanel,
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