# Anchor 锚点

用于跳转到页面指定位置。

## 基础用法

:::demo 

```html
<v-row>
  <v-col :span="24">
    <v-anchor show-ink>
      <v-anchor-link href="#Basic demo" title="Basic demo"></v-anchor-link>
      <v-anchor-link href="#Fixed demo" title="Fixed demo"></v-anchor-link>
      <v-anchor-link href="#API" title="API">
        <v-anchor-link href="#Anchor Props" title="Anchor Props" disabled></v-anchor-link>
        <v-anchor-link href="#Link Props" title="Link Props"></v-anchor-link>
      </v-anchor-link>
    </v-anchor>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Button from '@/components/button';
  import Anchor from '@/components/anchor';
  import AnchorLink from '@/components/anchor-link';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VButton: Button,
      VAnchor: Anchor,
      VAnchorLink: AnchorLink,
    },
    data() {
      return {
        active: '#API',
      };
    },
    methods: {
    },
  };
</script>
<style lang="scss" scoped>
  .article {
    height: 2000px; 
  }
</style>