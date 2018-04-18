# Pagination 分页

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-pagination :total="100" @size-change="handleSizeChange" @page-change="handlePageChange"></v-pagination>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-pagination :pager-count="5" :total="100" @size-change="handleSizeChange" @page-change="handlePageChange"></v-pagination>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-pagination :total="100" simple></v-pagination>
  </v-col>
<v-row>
  <v-col :span="24">
    <v-pagination :total="100" minimal></v-pagination>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Pagination from '@/components/pagination';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VPagination: Pagination,
    },
    methods: {
      handleSizeChange(val) {
        console.log(val);
      },
      handlePageChange(val) {
        console.log(val);
      },
    },
  };
</script>