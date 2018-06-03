# Modal 对话框

模态对话框。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程。

## 基础用法

:::demo 弹出一个对话框。

```html
<Row>
  <Col :span="24">
    <Button @click="visible = true">Open Modal</Button>
    <Modal
      :visible.sync="visible"
      :loading="loading"
      :before-close="beforeClose"
      @ok="handleOk">
      <template slot="body">
        <p>这是一段信息</p>
      </template>
    </Modal>
  </Col>
</Row>
```
:::

## 自定义标题

:::demo 可通过 `title` 属性或具名插槽 `slot="title"` 来自定义 Modal 标题。

```html
<Row>
  <Col :span="24">
    <Button @click="visible = true">Open Modal</Button>
    <Modal
      :visible.sync="visible"
      title="自定义"
      :loading="loading"
      :before-close="beforeClose"
      @ok="handleOk">
      <template slot="body">
        <p>这是一段信息</p>
      </template>
    </Modal>
  </Col>
</Row>
```
:::

## API

Modal props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| visible | 对话框是否可见 | boolean | - | false |
| transition | Modal 弹出动效 | string | - | modal-fade |
| title | 标题 | string | - | 提示 |
| top | Modal CSS 中的 top 值 | string | - | 0 |
| width | Modal 的宽度 | string | - | 50% | 
| mask | 是否显示遮罩层 | boolean | - | true |
| mask-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Modal 的父元素上 | boolean | - | true |
| modal-append-to-body | Modal 自身是否插入至 body 元素上 | boolean | - | true |
| show-close | 是否显示关闭按钮 | boolean | - | true |
| close-on-click-mask | 是否可以通过点击 mask 关闭 Modal | boolean | - | true |
| close-on-press-escape | 是否可以通过按下 ESC 关闭 Modal | boolean | - | true |
| footer | 是否显示底部内容 | boolean | - | - |
| ok-text | 确认按钮文字 | string | - | 确定 |
| cancel-text | 取消按钮文字 | string | - | 取消 |
| lock-scroll | 是否在 Modal 出现时将 body 滚动锁定 | boolean | - | true |
| fullscreen | 是否为全屏 Modal | boolean | - | false |
| loading | 确定按钮 loading | boolean | - | false |
| before-close | 关闭前的回调 | (done) = {}，done 用于关闭 Modal | - | - |

Modal events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| open | Modal 打开时的回调 | - |
| close | Modal 关闭后的回调

Modal slot

| 名称 | 说明 |
|---- |---- |
| header | Modal 头部内容 |
| title | Modal 标题区的内容 |
| close | Modal 头部关闭区的内容 |
| body | Modal 的内容 |
| footer | Modal 底部内容 |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Modal from '@/components/modal';

  export default {
    components: {
      Row,
      Col,
      Button,
      Modal,
    },
    data() {
      return {
        visible: false,
        loading: false,
        placement: '',
      };
    },
    methods: {
      beforeClose(done) {
        done();
      },
      handleOk() {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.visible = false;
        }, 2000);
      },
    },
  };
</script>