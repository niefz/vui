# Dropdown 下拉菜单

向下弹出的列表。

## 基础用法

:::demo 

```html
<Row>
  <Col :span="12">
    <Dropdown trigger="hover" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">下拉菜单</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶" disabled>双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎" divided>
          <Dropdown placement="right-start" @change="handleChange">
            <Button type="text" suffix-icon="v-icon-arrow-right-o">下拉菜单</Button>
            <DropdownMenu slot="dropdown">
              <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
              <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
              <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
              <DropdownMenuItem value="双皮奶" disabled>双皮奶</DropdownMenuItem>
              <DropdownMenuItem value="蚵仔煎" divided>蚵仔煎</DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
  <Col :span="12">
    <Dropdown trigger="click" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">下拉菜单</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶" disabled>双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎" divided>
          <Dropdown placement="right-start" @change="handleChange">
            <Button type="text" suffix-icon="v-icon-arrow-right-o">蚵仔煎</Button>
            <DropdownMenu slot="dropdown">
              <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
              <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
              <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
              <DropdownMenuItem value="双皮奶" disabled>双皮奶</DropdownMenuItem>
              <DropdownMenuItem value="蚵仔煎" divided>蚵仔煎</DropdownMenuItem>
            </DropdownMenu>
          </Dropdown>
        </DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
</Row>
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
      Row,
      Col,
      Button,
      Dropdown,
      DropdownMenu,
      DropdownMenuItem,
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