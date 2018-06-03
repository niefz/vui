# Drawer 抽屉

模态抽屉框。

## 何时使用

- 需要用户处理事务，又不希望跳转页面以致打断工作流程。

## 基础用法

:::demo Alert 组件提供四种主题，由 theme 属性指定，默认值为info。

```html
<Row>
  <Col :span="24">
    <Button @click="openModal('top')">open top</Button>
    <Button @click="openModal('right')">open right</Button>
    <Button @click="openModal('bottom')">open bottom</Button>
    <Button @click="openModal('left')">open left</Button>
    <Drawer
      :visible.sync="visible"
      :loading="loading"
      :placement="placement"
      :before-close="beforeClose"
      @ok="handleOk">
      <template slot="title">提示</template>
      <template slot="body">
        <p>The modal dialog will be closed after two seconds</p>
      </template>
    </Drawer>
  </Col>
</Row>
```
:::

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
        loading: false,
        placement: '',
      };
    },
    methods: {
      beforeClose(callback) {
        console.log('before-close');
        callback();
      },
      openModal(placement) {
        this.visible = true;
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