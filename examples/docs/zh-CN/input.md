# Input 输入框

基础用法。

:::demo 使用 row 和 col 组件，并通过 col 组件的 span 属性我们就可以自由地组合布局。

```html
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" suffix-icon="v-icon-calendar" @suffix-click="handleSuffix"></v-input>
  </v-col>
  <v-col :span="12">
    <v-input prefix-icon="v-icon-calendar" disabled></v-input>
  </v-col>
</v-row>
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" prepend="Http://" suffix-icon="v-icon-calendar" @suffix-click="handleSuffix"></v-input>
  </v-col>
  <v-col :span="12">
    <v-input v-model="keywords" suffix-icon="v-icon-calendar" append=".com" disabled></v-input>
  </v-col>
</v-row>
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" prepend="Http://" suffix-icon="v-icon-calendar" @suffix-click="handleSuffix">
      <template slot="append"><v-button theme="primary" @click="handleSuffix">查询</v-button></template>
    </v-input>
  </v-col>
  <v-col :span="12">
    <v-input v-model="keywords" prepend="Http://" suffix-icon="v-icon-calendar" @suffix-click="handleSuffix">
      <template slot="append"><v-button>查询</v-button></template>
    </v-input>
  </v-col>
</v-row>
<v-row :gutter="10">
  <v-col :span="12">
    <v-textarea v-model="keywords"></v-textarea>
  </v-col>
  <v-col :span="12">
    <v-textarea v-model="keywords" disabled></v-textarea>
  </v-col>
</v-row>
```
:::
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Input from '@/components/input';
  import Textarea from '@/components/textarea';
  import Button from '@/components/button';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VInput: Input,
      VTextarea: Textarea,
      VButton: Button,
    },
    data() {
      return {
        keywords: '',
      };
    },
    methods: {
      handleSuffix() {
        console.log(this.keywords);
      },
    },
  };
</script>
<style rel="stylesheet/scss" lang="sass" scoped>

</style>