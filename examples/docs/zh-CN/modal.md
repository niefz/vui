# Modal 对话框

用于页面中展示重要的提示信息。

## 基础用法

:::demo Alert 组件提供四种主题，由 theme 属性指定，默认值为info。

```html
<v-row>
  <v-col :span="24">
    <v-button @click="openModal('middle')">open middle</v-button>
    <v-button @click="openModal('top-right')">open top-right</v-button>
    <v-button @click="openModal('top-left')">open top-left</v-button>
    <v-button @click="openModal('bottom-right')">open bottom-right</v-button>
    <v-button @click="openModal('bottom-left')">open bottom-left</v-button>
    <v-modal
      :visible.sync="visible"
      :loading="loading"
      :placement="placement"
      :before-close="beforeClose"
      @ok="handleOk">
      <template slot="title">提示</template>
      <template slot="body">
        <p>The modal dialog will be closed after two seconds</p>
      </template>
    </v-modal>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Modal from '@/components/modal';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VModal: Modal,
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