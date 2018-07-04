# Transfer 穿梭框

## 基本用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Transfer v-model="values" :data="data" :titles="titles"></Transfer>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Transfer from '@/components/transfer';

  export default {
    components: {
      Row,
      Col,
      Transfer,
    },
    data() {
      return {
      	titles: ['left-panel', 'right-panel'],
      	values: [3, 5],
      	data: [{
      		key: 1,
      		label: 'my-options-1'
      	}, {
      		key: 2,
      		label: 'my-options-2'
      	}, {
      		key: 3,
      		label: 'my-options-3',
      		disabled: true
      	}, {
      		key: 4,
      		label: 'my-options-4',
      		disabled: true
      	}, {
      		key: 5,
      		label: 'my-options-5'
      	}]
      };
    },
    methods: {
    },
  };
</script>