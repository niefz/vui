# Empty 空提示

通用空提示。

## 基础用法

:::demo 

```html
<Row>
  <Col>
    <Empty description="抱歉，暂无数据！"></Empty>
  </Col>
</Row>
<Row>
  <Col>
    <Empty description="抱歉，暂无数据！" src="http://icon.qiantucdn.com/img/searchnew/nores.png"></Empty>
  </Col>
</Row>
<Row>
  <Col>
    <div class="empty">
      <Empty src="http://icon.qiantucdn.com/img/searchnew/nores.png" fill>
        抱歉，暂无数据！
      </Empty>
    </div>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Empty from '@/components/empty';

  export default {
    components: {
      Row,
      Col,
      Empty,
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
.empty { height: 300px; }
</style>