# Steps 步骤条

## 基础用法

:::demo 

```html
<Row>
  <Col :span="24">
    <Steps :current="current">
      <StepsItem title="已完成" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="进行中" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
    </Steps>
  </Col>
</Row>
<Row>
  <Col :span="24">
    <Button theme="primary" @click="current += 1">下一步</Button>
    <Button v-if="current > 1" @click="current -= 1">上一步</Button>
  </Col>
</Row>
<Row></Row>
<Row></Row>
<Row>
  <Col :span="24">
    <Steps :current="1" status="error">
      <StepsItem title="已完成" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="进行中" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
    </Steps>
  </Col>
</Row>
<Row></Row>
<Row></Row>
<Row>
  <Col :span="24">
    <Steps mode="vertical" :current="2" status="error">
      <StepsItem title="已完成" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="进行中" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
      <StepsItem title="待进行" description="这里是该步骤的描述信息"></StepsItem>
    </Steps>
  </Col>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Steps from '@/components/steps';
  import StepsItem from '@/components/steps-item';

  export default {
    components: {
      Row,
      Col,
      Button,
      Steps,
      StepsItem,
    },
    data() {
      return {
        current: 1,
      };
    },
    methods: {
      handleClick(val) {
        this.active = val;
      },
    },
  };
</script>