# Input 数字输入框

基本用法。

:::demo 

```html
<Row :gutter="10">
  <Col :span="12">
    <InputNumber v-model="keywords" :min="1" :max="10"></InputNumber>
  </Col>
  <Col :span="12">
    <InputNumber :min="1" :max="10"></InputNumber>
  </Col>
</Row>
```
:::
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import InputNumber from '@/components/input-number';

  export default {
    components: {
      Row,
      Col,
      InputNumber,
    },
    data() {
      return {
        keywords: 1,
        select: '上海',
        options: ['上海', '北京', '广州', '深圳'],
      };
    },
    methods: {
      handleSuffix() {
        console.log(this.keywords);
      },
    },
  };
</script>
<style lang="scss" scoped>

</style>