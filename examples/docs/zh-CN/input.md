# Input 输入框

基础用法。

:::demo 

```html
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" suffix-icon="icon-calendar" @suffix-click="handleSuffix" @keyup.enter="handleSuffix"></v-input>
  </v-col>
  <v-col :span="12">
    <v-input prefix-icon="icon-calendar" disabled></v-input>
  </v-col>
</v-row>
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" prepend="Http://" suffix-icon="icon-calendar" @suffix-click="handleSuffix"></v-input>
  </v-col>
  <v-col :span="12">
    <v-input v-model="keywords" suffix-icon="icon-calendar" append=".com" disabled></v-input>
  </v-col>
</v-row>
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" prepend="Http://" @suffix-click="handleSuffix">
      <template slot="append"><v-button theme="primary" @click="handleSuffix">查询</v-button></template>
    </v-input>
  </v-col>
  <v-col :span="12">
    <v-input v-model="keywords" prepend="Http://" suffix-icon="icon-calendar" @suffix-click="handleSuffix">
      <template slot="append"><v-button>查询</v-button></template>
    </v-input>
  </v-col>
</v-row>
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" prepend="Http://" @suffix-click="handleSuffix">
      <template slot="append">
        <v-select v-model="select">
          <v-select-menu>
            <v-select-menu-option :label="item" :value="item" :key="item" v-for="item in options"></v-select-menu-option>
          </v-select-menu>
        </v-select>
      </template>
    </v-input>
  </v-col>
  <v-col :span="12">
    <v-input v-model="keywords" suffix-icon="icon-calendar" @suffix-click="handleSuffix">
      <template slot="prepend">
        <v-select v-model="select">
          <v-select-menu>
            <v-select-menu-option :label="item" :value="item" :key="item" v-for="item in options"></v-select-menu-option>
          </v-select-menu>
        </v-select>
      </template>
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
  import Select from '@/components/select';
  import SelectMenu from '@/components/select-menu';
  import SelectMenuOption from '@/components/select-menu-option';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VInput: Input,
      VTextarea: Textarea,
      VButton: Button,
      VSelect: Select,
      VSelectMenu: SelectMenu,
      VSelectMenuOption: SelectMenuOption,
    },
    data() {
      return {
        keywords: '',
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