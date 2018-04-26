# Empty 空提示

通用空提示。

## 基础用法

:::demo 

```html
<v-row>
  <v-col>
    <v-empty description="抱歉，暂无数据！"></v-empty>
  </v-col>
</v-row>
<v-row>
  <v-col>
    <v-empty description="抱歉，暂无数据！" src="http://icon.qiantucdn.com/img/searchnew/nores.png"></v-empty>
  </v-col>
</v-row>
<v-row>
  <v-col>
    <div class="empty">
      <v-empty src="http://icon.qiantucdn.com/img/searchnew/nores.png" fill>
        抱歉，暂无数据！
      </v-empty>
    </div>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Empty from '@/components/empty';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VEmpty: Empty,
    },
    methods: {
    },
  };
</script>

<style>
.empty { height: 300px; }
</style>