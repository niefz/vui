# Notification 通知提醒

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-button @click="notification">notification</v-button>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Notify from '@/components/notification';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
    },
    methods: {
      notification() {
        Notify({
          theme: 'warning',
          title: '警告提示',
        });
      },
    },
  };
</script>