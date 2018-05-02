# Affix 固钉

将页面元素钉在可视范围。

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-affix :top="80" :right="100" affix>
      <v-button>固定</v-button>
    </v-affix>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-affix :top="80" :left="200">
      <v-button>固定</v-button>
    </v-affix>
  </v-col>
</v-row>
<v-row>
  <v-col :span="24">
    <v-affix :bottom="10" affix>
      <v-button>固定</v-button>
    </v-affix>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Affix from '@/components/affix';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VAffix: Affix,
    },
  };
</script>
<style lang="scss" scoped>
  .article {
    height: 2000px; 
  }
</style>