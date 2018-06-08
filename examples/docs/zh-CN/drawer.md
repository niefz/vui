# Drawer 抽屉

模态抽屉框。

## 何时使用

- 需要从页面边缘滑动出来的浮层，可以替代 Modal 放更多内容。

## 基本用法

:::demo 默认从页面右边滑动出来一个浮层。

```html
<Row>
  <Col :span="24">
    <Button @click="visible = true">Open Drawer</Button>
    <Drawer
      :visible.sync="visible"
      :loading="loading"
      :before-close="beforeClose"
      @ok="handleOk">
      <template slot="title">提示</template>
      <template slot="body">
        <p>一个从页面边缘滑动出来的浮层，可以替代 Modal 放更多内容。</p>
      </template>
    </Drawer>
  </Col>
</Row>
```
:::

## 显示位置

:::demo 通过 `placement` 属性可设置 Drawer 显示的位置。

```html
<Row>
  <Col :span="24">
    <Button @click="openDrawer('top')">Open Top</Button>
    <Button @click="openDrawer('right')">Open Right</Button>
    <Button @click="openDrawer('bottom')">Open Bottom</Button>
    <Button @click="openDrawer('left')">Open Left</Button>
    <Drawer
      :visible.sync="placementVisible"
      :loading="loading"
      :placement="placement"
      :before-close="beforeClose"
      @ok="handleOk">
      <template slot="title">提示</template>
      <template slot="body">
        <p>一个从页面边缘滑动出来的浮层，可以替代 Modal 放更多内容。</p>
      </template>
    </Drawer>
  </Col>
</Row>
```
:::

## API

Drawer props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| visible | 对话框是否可见 | boolean | - | false |
| transition | Drawer 弹出动效 | string | - | - |
| title | 标题 | string | - | 提示 |
| width | Drawer 的宽度，仅在 `placement` 为 right 或 left 时有效 | string | - | auto |
| placement | Drawer 显示的位置 | string | `top` `right` `bottom` `left` | right |
| mask | 是否显示遮罩层 | boolean | - | true |
| maskClassName | 遮罩层 className | string | - | v-modal--mask |
| show-close | 是否显示关闭按钮 | boolean | - | true |
| close-on-click-mask | 是否可以通过点击 mask 关闭 Drawer | boolean | - | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Drawer | boolean | - | true |
| footer | 是否显示底部内容 | boolean | - | - |
| ok-text | 确认按钮文字 | string | - | 确定 |
| cancel-text | 取消按钮文字 | string | - | 取消 |
| loading | 确定按钮 loading | boolean | - | false |
| before-close | 关闭前的回调 | (done) = {}，done 用于关闭 Drawer | - | - |

Drawer events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| open | Drawer 打开时的回调 | - |
| close | Drawer 关闭后的回调

Drawer slot

| 名称 | 说明 |
|---- |---- |
| header | Drawer 头部内容 |
| title | Drawer 标题区的内容 |
| close | Drawer 头部关闭区的内容 |
| body | Drawer 的内容 |
| footer | Drawer 底部内容 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Drawer from '@/components/drawer';

  export default {
    components: {
      Row,
      Col,
      Button,
      Drawer,
    },
    data() {
      return {
        visible: false,
        placementVisible: false,
        loading: false,
        placement: '',
      };
    },
    methods: {
      beforeClose(done) {
        console.log('before-close');
        done();
      },
      openDrawer(placement) {
        this.placementVisible = true;
        this.placement = placement;
      },
      handleOk() {
        console.log('handle-ok');
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.visible = false;
        }, 2000);
      },
    },
  };
</script>