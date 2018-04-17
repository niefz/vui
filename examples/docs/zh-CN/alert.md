# Alert 警告提示

用于页面中展示重要的提示信息。

## 基础用法

:::demo Alert 组件提供四种主题，由 theme 属性指定，默认值为info。

```html
<v-row>
  <v-col :span="24">
    <v-alert message="默认消息提示" description="Detailed description and advices about successful copywriting.Detailed description and advices about successful copywriting.Detailed description and advices about successful copywriting." show-icon closable></v-avatar>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-alert theme="success" message="成功消息提示" show-icon closable></v-avatar>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-alert theme="warning" message="警告消息提示" show-icon closable></v-avatar>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-alert theme="danger" message="错误消息提示" show-icon closable></v-avatar>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-alert theme="danger" message="错误消息提示" close-text="知道了" closable></v-avatar>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Alert from '@/components/alert';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VAlert: Alert,
    },
    methods: {
    },
  };
</script>