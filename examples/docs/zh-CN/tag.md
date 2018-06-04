# Tag 标签

用于标记和选择。

## 基本用法

:::demo 由 theme 属性来设置 tag 的类型，也可以通过color属性来自定义背景色。

```html
<Row>
  <Tag>标签一</Tag>
  <Tag theme="success">标签二</Tag>
  <Tag theme="info">标签三</Tag>
  <Tag theme="warning">标签四</Tag>
  <Tag theme="danger">标签五</Tag>
  <Tag theme="danger" color="#f50" closable>标签五</Tag>
</Row>
<Row>
  <Tag
    theme="info"
    closable
    @close="handleClose(tag)"
    :key="tag"
    v-for="tag in dynamicTags">
    {{tag}}
  </Tag>
</Row>
<Row>
  <Tag
    theme="text"
    closable
    @close="handleClose(tag)"
    :key="tag"
    v-for="tag in dynamicTags">
    {{tag}}
  </Tag>
</Row>
<Row>
  <TagGroup v-model="model">
    <Tag
      :value="tag"
      theme="text"
      @close="handleClose(tag)"
      @change="handleChange"
      :key="tag"
      v-for="tag in dynamicTags">
    </Tag>
  </TagGroup>
</Row>
<Row>
  <TagGroup v-model="multiple" multiple>
    <Tag
      :value="tag"
      theme="text"
      @close="handleClose(tag)"
      @change="handleMultipleChange"
      :key="tag"
      v-for="tag in dynamicTags">
    </Tag>
  </TagGroup>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import TagGroup from '@/components/tag-group';
  import Tag from '@/components/tag';

  export default {
    components: {
      Row,
      Tag,
      TagGroup,
    },
    data() {
      return {
        model: '标签一',
        multiple: ['标签一'],
        dynamicTags: ['标签一', '标签二', '标签三', '标签四', '标签五'],
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleChange(val) {
        this.model = val;
      },
      handleMultipleChange(val) {
        this.multiple = val;
      },
    },
  };
</script>