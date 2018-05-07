# Drawer 抽屉

用于页面中展示重要的提示信息。

## 基础用法

:::demo Alert 组件提供四种主题，由 theme 属性指定，默认值为info。

```html
<v-row>
  <v-col :span="24">
    <v-button @click="openModal('top')">open top</v-button>
    <v-button @click="openModal('right')">open right</v-button>
    <v-button @click="openModal('bottom')">open bottom</v-button>
    <v-button @click="openModal('left')">open left</v-button>
    <v-drawer
      :visible.sync="visible"
      :loading="loading"
      :placement="placement"
      :before-close="beforeClose"
      @ok="handleOk">
      <template slot="title">提示</template>
      <template slot="body">
        <p>The modal dialog will be closed after two seconds</p>
      </template>
    </v-drawer>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Drawer from '@/components/drawer';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VDrawer: Drawer,
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