# Dropdown 下拉菜单

向下弹出的列表。

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="12">
    <v-dropdown trigger="hover" @change="handleChange">
      <v-button type="text" suffix-icon="v-icon-arrow-down">下拉菜单</v-button>
      <v-dropdown-menu slot="dropdown">
        <v-dropdown-menu-item value="黄金糕">黄金糕</v-dropdown-menu-item>
        <v-dropdown-menu-item value="狮子头">狮子头</v-dropdown-menu-item>
        <v-dropdown-menu-item value="螺蛳粉">螺蛳粉</v-dropdown-menu-item>
        <v-dropdown-menu-item value="双皮奶" disabled>双皮奶</v-dropdown-menu-item>
        <v-dropdown-menu-item value="蚵仔煎" divided>
          <v-dropdown trigger="hover" @change="handleChange">
            下拉菜单
            <v-dropdown-menu slot="dropdown">
              <v-dropdown-menu-item value="黄金糕">黄金糕</v-dropdown-menu-item>
              <v-dropdown-menu-item value="狮子头">狮子头</v-dropdown-menu-item>
              <v-dropdown-menu-item value="螺蛳粉">螺蛳粉</v-dropdown-menu-item>
              <v-dropdown-menu-item value="双皮奶" disabled>双皮奶</v-dropdown-menu-item>
              <v-dropdown-menu-item value="蚵仔煎" divided>蚵仔煎</v-dropdown-menu-item>
            </v-dropdown-menu>
          </v-dropdown>
        </v-dropdown-menu-item>
      </v-dropdown-menu>
    </v-dropdown>
  </v-col>
  <v-col :span="12">
    <v-dropdown trigger="click" @change="handleChange">
      <v-button type="text" suffix-icon="v-icon-arrow-down">下拉菜单</v-button>
      <v-dropdown-menu slot="dropdown">
        <v-dropdown-menu-item value="黄金糕">黄金糕</v-dropdown-menu-item>
        <v-dropdown-menu-item value="狮子头">狮子头</v-dropdown-menu-item>
        <v-dropdown-menu-item value="螺蛳粉">螺蛳粉</v-dropdown-menu-item>
        <v-dropdown-menu-item value="双皮奶" disabled>双皮奶</v-dropdown-menu-item>
        <v-dropdown-menu-item value="蚵仔煎" divided>
          <v-dropdown trigger="click" @change="handleChange">
            蚵仔煎
            <v-dropdown-menu slot="dropdown">
              <v-dropdown-menu-item value="黄金糕">黄金糕</v-dropdown-menu-item>
              <v-dropdown-menu-item value="狮子头">狮子头</v-dropdown-menu-item>
              <v-dropdown-menu-item value="螺蛳粉">螺蛳粉</v-dropdown-menu-item>
              <v-dropdown-menu-item value="双皮奶" disabled>双皮奶</v-dropdown-menu-item>
              <v-dropdown-menu-item value="蚵仔煎" divided>蚵仔煎</v-dropdown-menu-item>
            </v-dropdown-menu>
          </v-dropdown>
        </v-dropdown-menu-item>
      </v-dropdown-menu>
    </v-dropdown>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Dropdown from '@/components/dropdown';
  import DropdownMenu from '@/components/dropdown-menu';
  import DropdownMenuItem from '@/components/dropdown-menu-item';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VDropdown: Dropdown,
      VDropdownMenu: DropdownMenu,
      VDropdownMenuItem: DropdownMenuItem,
    },
    data() {
      return {
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
    },
  };
</script>