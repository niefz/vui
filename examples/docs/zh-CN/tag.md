# Tag 标签

用于标记和选择。

## 基础用法

:::demo 由 theme 属性来设置 tag 的类型，也可以通过color属性来自定义背景色。

```html
<v-row>
  <v-tag>标签一</v-tag>
  <v-tag theme="success">标签二</v-tag>
  <v-tag theme="info">标签三</v-tag>
  <v-tag theme="warning">标签四</v-tag>
  <v-tag theme="danger">标签五</v-tag>
  <v-tag theme="danger" color="#f50" closable>标签五</v-tag>
</v-row>
<v-row>
  <v-tag
    theme="info"
    closable
    @close="handleClose(tag)"
    :key="tag"
    v-for="tag in dynamicTags">
    {{tag}}
  </v-tag>
</v-row>
<v-row>
  <v-tag
    theme="text"
    closable
    @close="handleClose(tag)"
    :key="tag"
    v-for="tag in dynamicTags">
    {{tag}}
  </v-tag>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Tag from '@/components/tag';

  export default {
    components: {
      VTag: Tag,
      VRow: Row,
    },
    data() {
      return {
        dynamicTags: ['标签一', '标签二', '标签三', '标签四', '标签五'],
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
    },
  };
</script>