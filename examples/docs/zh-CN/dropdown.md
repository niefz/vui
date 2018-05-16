# Dropdown 下拉菜单

向下弹出的列表。

## 何时使用

当页面上的操作命令过多时，用此组件可以收纳操作元素。点击或移入触点，会出现一个下拉菜单。可在列表中进行选择，并执行相应的命令。

## 基础用法

:::demo 需要配合 `DropdownMenu` 和 `DropdownMenuItem` 两个组件来使用，并且给列表设置具名 slot 为 `dropdown`。

```html
<Row>
  <Col :span="12">
    <Dropdown trigger="hover" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">下拉菜单</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶">双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎">下拉菜单</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
</Row>
```
:::

## 触发方式

:::demo 通过 `trigger` 属性设置触发事件，支持事件：`hover` (默认值)、`click`。

```html
<Row>
  <Col :span="6">
    <Dropdown trigger="hover" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">hover 触发</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶">双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎">蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
  <Col :span="6">
    <Dropdown trigger="click" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">click 触发</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶">双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎">蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
</Row>
```
:::

## 对齐方向

:::demo 通过 `placement` 属性，支持事件：`hover` (默认值)、`click`。

```html
<Row>
  <Col :span="6">
    <Dropdown placement="bottom-start" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">菜单(左)</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶">双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎">蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
  <Col :span="6">
    <Dropdown @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">菜单(居中)</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶">双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎">蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
  <Col :span="6">
    <Dropdown placement="bottom-end" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">菜单(右)</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶">双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎">蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
</Row>
```
:::

## 禁用与分割线

:::demo 可以禁用整个组件，也可以禁用单个选项，只需配置 `disabled`、`divided` 属性。

```html
<Row>
  <Col :span="6">
    <Dropdown trigger="hover" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o" disabled>hover 触发</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶" disabled>双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎">蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
  <Col :span="6">
    <Dropdown trigger="click" @change="handleChange">
      <Button type="text" suffix-icon="v-icon-arrow-down-o">click 触发</Button>
      <DropdownMenu slot="dropdown">
        <DropdownMenuItem value="黄金糕">黄金糕</DropdownMenuItem>
        <DropdownMenuItem value="狮子头">狮子头</DropdownMenuItem>
        <DropdownMenuItem value="螺蛳粉">螺蛳粉</DropdownMenuItem>
        <DropdownMenuItem value="双皮奶" disabled>双皮奶</DropdownMenuItem>
        <DropdownMenuItem value="蚵仔煎" divided>蚵仔煎</DropdownMenuItem>
      </DropdownMenu>
    </Dropdown>
  </Col>
</Row>
```
:::

## API

Dropdown props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| trigger | 触发方式| string | `hover` `click` | hover |
| placement | 菜单弹出位置 | string | `top` `top-start` `top-end` `bottom` `bottom-start` `bottom-end` `left` `left-start` `left-end` `right` `right-start` `right-end` | bottom-start |
| show-timeout | 展开下拉菜单的延时（仅在 trigger 为 hover 时有效） | number | - | 150 |
| hide-timeout | 收起下拉菜单的延时（仅在 trigger 为 hover 时有效） | number | - | 150 |
| hide-after-click | 是否在点击菜单项后隐藏菜单 | boolean | - | true |
| append-to-body | 是否插入至 body 元素上 | boolean | - | true |

Dropdown events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| change | 点击菜单项时触发 | DropdownMenuItem 的 value 值 |
| visible-change | 菜单显示状态改变时触发 | visible |

Dropdown slot

| 名称 | 说明 |
|---- |---- |
| 无 | 主体内容 |
| dropdown | 下拉列表 |

DropdownMenuItem props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| value | 唯一标识 | String | - | - |
| divided | 是否显示分割线 | Boolean | - | false |
| disabled | 是否禁用该项 | Boolean | - | false |

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