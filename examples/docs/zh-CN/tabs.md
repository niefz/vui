# Tabs 标签页

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-tabs v-model="active" placement="top" @tab-click="handleClick">
      <template slot="nav">
        <v-tabs-nav label="用户管理" value="用户管理"></v-tabs-nav>
        <v-tabs-nav label="配置管理" value="配置管理"></v-tabs-nav>
        <v-tabs-nav label="角色管理" value="角色管理"></v-tabs-nav>
        <v-tabs-nav label="我的工作台" value="我的工作台"></v-tabs-nav>
      </template>
      <template slot="content">
        {{active}}
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

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VTabs: Tabs,
      VTabsNav: TabsNav,
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