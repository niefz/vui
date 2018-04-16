# Table 表格

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-table></v-table>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Table from '@/components/table';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VTable: Table,
    },
    methods: {
    },
  };
</script>