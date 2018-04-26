# Exception 异常页

通用异常页。

## 基础用法

:::demo 

```html
<v-row>
  <v-col>
    <v-exception exception="403">
      <template>
        <v-button theme="primary">返回首页</v-button>
      </template>
    </v-exception>
  </v-col>
</v-row>
<v-row>
  <v-col>
    <v-exception>
      <template>
        <v-button theme="primary">返回首页</v-button>
      </template>
    </v-exception>
  </v-col>
</v-row>
<v-row>
  <v-col>
    <v-exception exception="500">
      <template>
        <v-button theme="primary">返回首页</v-button>
      </template>
    </v-exception>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Exception from '@/components/exception';
  import Button from '@/components/button';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VException: Exception,
      VButton: Button,
    },
    methods: {
    },
  };
</script>