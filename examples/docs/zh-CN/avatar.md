# Avatar 头像

用于头像。

## 基础用法

:::demo 定义value属性，它接受Number或者String。

```html
<v-row>
  <v-col :span="3">
    <v-avatar icon="v-icon-user"></v-avatar>
  </v-col>
  <v-col :span="3">
    <v-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></v-avatar>
  </v-col>
  <v-col :span="3">
    <v-avatar icon="v-icon-user" shape="circle"></v-avatar>
  </v-col>
  <v-col :span="3">
    <v-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg" shape="circle"></v-avatar>
  </v-col>
  <v-col :span="3">
    <v-badge value="1">
      <v-avatar icon="v-icon-user"></v-avatar>
    </v-badge>
  </v-col>
  <v-col :span="3">
    <v-badge dot>
      <v-avatar src="https://i.loli.net/2017/08/21/599a521472424.jpg"></v-avatar>
    </v-badge>
  </v-col>
  <v-col :span="3">
    <v-badge dot>
      <v-avatar>USER</v-avatar>
    </v-badge>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Badge from '@/components/badge';
  import Avatar from '@/components/avatar';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VAvatar: Avatar,
      VBadge: Badge,
    },
    methods: {
    },
  };
</script>