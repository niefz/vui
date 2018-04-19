# Steps 步骤条

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-steps :current="current">
      <v-steps-item title="已完成" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="进行中" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="待进行" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="待进行" description="这里是该步骤的描述信息"></v-steps-item>
    </v-steps>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-button theme="primary" @click="current += 1">下一步</v-button>
    <v-button v-if="current > 1" @click="current -= 1">上一步</v-button>
  </v-col>
</v-row>
<v-row></v-row>
<v-row></v-row>
<v-row>
  <v-col :span="24">
    <v-steps :current="1" status="error">
      <v-steps-item title="已完成" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="进行中" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="待进行" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="待进行" description="这里是该步骤的描述信息"></v-steps-item>
    </v-steps>
  </v-col>
</v-row>
<v-row></v-row>
<v-row></v-row>
<v-row>
  <v-col :span="24">
    <v-steps mode="vertical" :current="2" status="error">
      <v-steps-item title="已完成" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="进行中" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="待进行" description="这里是该步骤的描述信息"></v-steps-item>
      <v-steps-item title="待进行" description="这里是该步骤的描述信息"></v-steps-item>
    </v-steps>
  </v-col>
</v-row>
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
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VSteps: Steps,
      VStepsItem: StepsItem,
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