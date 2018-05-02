# Card 卡片

通用卡片容器。

## 基础用法

:::demo 

```html
<v-row>
  <v-col>
    <v-Card>
      <header slot="header">
        This is header
      </header>
      <div>
        This is content
      </div>
      <footer slot="footer">
        This is footer
      </footer>
    </v-Card>
  </v-col>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Card from '@/components/card';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VCard: Card,
    },
    methods: {
    },
  };
</script>
<<<<<<< HEAD
<style lang="scss" scoped>
  .v-col-24 {
    height: 100px; 
  }
=======

<style rel="stylesheet/scss" lang="sass" scoped>
  
>>>>>>> b6675ee72b36519fad5d727100f3acc57bd496a4
</style>