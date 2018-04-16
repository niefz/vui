# Tree 树形控件

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-tree></v-tree>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Tree from '@/components/tree';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VTree: Tree,
    },
    methods: {
    },
  };
</script>