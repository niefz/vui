# Badge 标记

用于标记。

## 基础用法

:::demo 定义value属性，它接受Number或者String。

```html
<v-row>
  <v-col :span="4">
    <v-badge :value="20" :max="10">
      <v-button>标签二</v-button>
    </v-badge>
  </v-col>
  <v-col :span="4">
    <v-badge :value="20" dot>
      <v-button>标签二</v-button>
    </v-badge>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Badge from '@/components/badge';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VBadge: Badge,
    },
    methods: {
    },
  };
</script>