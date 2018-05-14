# Tabs 标签页

## 基础用法

:::demo 

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