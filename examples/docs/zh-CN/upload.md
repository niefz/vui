# Upload 上传

用于上传附件。

## 基础用法

:::demo 

```html
<Row>
  <Upload 
  	action="/api/upload"
  	:on-start="handleStart"
  	:on-success="handleSuccess"
  	:on-error="handleError"
  >
		<Button theme="primary">上传</Button>
  </Upload>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Upload from '@/components/upload';
  import Button from '@/components/button';

  export default {
    components: {
      Row,
      Upload,
      Button,
    },
    data() {
      return {
      };
    },
    methods: {
    	handleStart(file) {
    		console.log('start', file);
    	},
    	handleSuccess(file) {
				console.log('success', file);
    	},
    	handleError(file) {
    		console.log('error', file);
    	},
    },
  };
</script>