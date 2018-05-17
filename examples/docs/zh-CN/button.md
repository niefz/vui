# Button 按钮

通常用于表单、对话框、菜单上，响应用户点击行为，触发相应的业务逻辑。
  
## 基础按钮

按钮有两种类型：普通按钮、 文字按钮。
  
:::demo 使用 `type` 属性来定义 Button 的表现形式。

```html
<Row>
  <Col :span="6">
    <Button theme="primary">主要按钮</Button>
    <Button>次要按钮</Button>
  </Col>
  <Col :span="12">
    <Button type="text" theme="primary">主要按钮</Button>
    <Button type="text">文字按钮</Button>
  </Col>
</Row>
```
:::
  
## 主题按钮

按钮的颜色赋予其感情色彩，能给用户带来操作提示。

:::demo 使用 `theme` 属性来定义 Button 的主题。

```html
<Row>
  <Col :span="24">
    <Button theme="primary">主要按钮</Button>
    <Button theme="warning">告警按钮</Button>
    <Button theme="danger">危险按钮</Button>
    <Button>默认按钮</Button>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Button theme="primary" plain>主要按钮</Button>
    <Button theme="warning" plain>告警按钮</Button>
    <Button theme="danger" plain>危险按钮</Button>
    <Button plain>默认按钮</Button>
  </Col>
</Row>
```
:::
  
## 图标、文字按钮

带有 Icon 的按钮，能在视觉上简洁有效的指引用户操作。特殊情况下，使用图标能够代替文本。

:::demo 可设置 `prefix-icon` 、`suffix-icon` 属性，或者在 Button 中内联 icon。

```html
<Row>
  <Col :span="24">
    <Button prefix-icon="v-icon-user-plus-o">添加用户</Button>
    <Button theme="primary" suffix-icon="v-icon-search-o">查询</Button>
    <Button prefix-icon="v-icon-user-plus-o"></Button>
    <Button theme="primary" suffix-icon="v-icon-search-o"></Button>
    <Button shape="circle" prefix-icon="v-icon-user-plus-o"></Button>
    <Button shape="circle" theme="primary" suffix-icon="v-icon-search-o"></Button>
  </Col>
</Row>
```
:::
  
## 加载状态按钮

:::demo 可通过添加 `loading` 属性，使按钮处于加载中状态。

```html
<Row>
  <Col :span="24">
    <Button prefix-icon="v-icon-loading" loading>加载中</Button>
    <Button theme="primary" prefix-icon="v-icon-loading" loading>加载中</Button>
    <Button prefix-icon="v-icon-loading" loading></Button>
    <Button shape="circle" suffix-icon="v-icon-loading" loading></Button>
  </Col>
</Row>
```
:::
  
## 组合按钮

可以将多个按钮放进 ButtonGroup 中形成一个组合按钮。

:::demo 

```html
<Row>
  <Col :span="12">
    <ButtonGroup>
      <Button disabled>最近一周</Button>
      <Button>最近一个月</Button>
      <Button>最近三个月</Button>
      <Dropdown placement="bottom-end" @change="handleChange">
        <Button suffix-icon="v-icon-more"></Button>
        <DropdownMenu slot="dropdown">
          <DropdownMenuItem value="180">最近六个月</DropdownMenuItem>
          <DropdownMenuItem value="365">最近一年</DropdownMenuItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  </Col>
  <Col :span="12">
    <ButtonGroup>
      <Button prefix-icon="v-icon-arrow-left-o">上一页</Button>
      <Button suffix-icon="v-icon-arrow-right-o">下一页</Button>
    </ButtonGroup>
  </Col>
</Row>
```
:::
  
## 禁用按钮

:::demo 通过添加 `disabled` 属性来达到禁用状态。

```html
<Row>
  <Col :span="6">
    <Button theme="primary" disabled>主要按钮</Button>
    <Button disabled>次要按钮</Button>
  </Col>
  <Col :span="6">
    <Button type="text" theme="primary" disabled>文字按钮</Button>
    <Button type="text" disabled>文字按钮</Button>
  </Col>
  <Col :span="6">
    <ButtonGroup disabled>
      <Button prefix-icon="v-icon-caret-left">上一页</Button>
      <Button suffix-icon="v-icon-caret-right">下一页</Button>
    </ButtonGroup>
  </Col>
</Row>
```
:::
  
## 按钮尺寸

提供四种尺寸：large、medium、small、mini。

:::demo 可通过 `size` 属性配置，默认为 small。

```html
<Row>
  <Col :span="24">
    <Button size="large" shape="radius" theme="primary">操作按钮</Button>
    <Button size="medium" shape="radius" theme="primary">操作按钮</Button>
    <Button size="small" shape="radius" theme="primary">操作按钮</Button>
    <Button size="mini" shape="radius" theme="primary">操作按钮</Button>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Button size="large" shape="circle" theme="primary" suffix-icon="v-icon-search-o"></Button>
    <Button size="medium" shape="circle" theme="primary" suffix-icon="v-icon-search-o"></Button>
    <Button size="small" shape="circle" theme="primary" suffix-icon="v-icon-search-o"></Button>
    <Button size="mini" shape="circle" theme="primary" suffix-icon="v-icon-search-o"></Button>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <ButtonGroup size="large">
      <Button theme="primary" prefix-icon="v-icon-caret-left">上一页</Button>
      <Button theme="primary" suffix-icon="v-icon-caret-right">下一页</Button>
    </ButtonGroup>
    <ButtonGroup size="medium">
      <Button theme="primary" prefix-icon="v-icon-caret-left">上一页</Button>
      <Button theme="primary" suffix-icon="v-icon-caret-right">下一页</Button>
    </ButtonGroup>
    <ButtonGroup size="small">
      <Button theme="primary" prefix-icon="v-icon-caret-left">上一页</Button>
      <Button theme="primary" suffix-icon="v-icon-caret-right">下一页</Button>
    </ButtonGroup>
    <ButtonGroup size="mini">
      <Button theme="primary" prefix-icon="v-icon-caret-left">上一页</Button>
      <Button theme="primary" suffix-icon="v-icon-caret-right">下一页</Button>
    </ButtonGroup>
  </Col>
</Row>
```
:::

## API

Button props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| native-type | 原生 type 属性 | string | `button` `submit` `reset` | button |
| type | 类型 | string | `button` `text` | button |
| shape | 形状 | string | `radius` `circle` | radius |
| theme | 主题 | string | `default` `primary` `warning` `danger` | default |
| size | 尺寸 | string | `large` `medium` `small` `mini` | small |
| plain | 是否朴素按钮 | boolean | - | false |
| disabled | 是否禁用状态 | boolean | - | false |
| loading | 是否加载中 | boolean | - | false |
| prefix-icon | 头部图标 | string | - | - |
| suffix-icon | 尾部图标 | string | - | - |

ButtonGroup props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| mode | 模式 | string | `horizontal` `vertical` | vertical |
| size | 尺寸 | string | `large` `medium` `small` `mini` | small |
| disabled | 是否禁用 | boolean | - | false |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Dropdown from '@/components/dropdown';
  import DropdownMenu from '@/components/dropdown-menu';
  import DropdownMenuItem from '@/components/dropdown-menu-item';
  import Button from '@/components/button';
  import ButtonGroup from '@/components/button-group';

  export default {
    components: {
      Row,
      Col,
      Dropdown,
      DropdownMenu,
      DropdownMenuItem,
      Button,
      ButtonGroup,
    },
    methods: {
      handleChange(value) {
        console.log(value);
      },
    },
  };
</script>