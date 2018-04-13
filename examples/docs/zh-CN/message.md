# Message 全局提示

常用于操作后的反馈提示。

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-button @click="openMessage">open message</v-button>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Message from '@/components/message';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
    },
    methods: {
      openMessage() {
        Message({
          theme: 'warning',
          message: '警告消息提示',
        });
      },
    },
  };
</script>