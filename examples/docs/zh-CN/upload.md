# Upload 上传

用于上传附件。

## 基础用法

:::demo 

```html
<Row>
  <Upload></Upload>
</Row>
<Row>
  <Upload disabled></Upload>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Upload from '@/components/upload';

  export default {
    components: {
      Row,
      Upload,
    },
    data() {
      return {
      };
    },
    methods: {
    },
  };
</script>