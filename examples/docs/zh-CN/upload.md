# Upload 上传

用于上传附件。

## 基本用法

:::demo 

```html
<Row>
  <Upload 
  	action="http://localhost:3010/api/uploads"
  	:on-start="handleStart"
  	:on-success="handleSuccess"
  	:on-error="handleError"
  	name="tester"
  	:file-list="fileList"
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
      	fileList: [
      		{
						'status': 3,
						'name': 'FreeUI.html',
						'size': 1921,
						'percent': 100,
						'raw': {},
						'uid': 1527001881256.0994
					}
      	]
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