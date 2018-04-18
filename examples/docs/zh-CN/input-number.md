# Input 数字输入框

基础用法。

:::demo 

```html
<v-row :gutter="10">
  <v-col :span="12">
    <v-input v-model="keywords" suffix-icon="v-icon-calendar" @suffix-click="handleSuffix" @keyup.enter="handleSuffix"></v-input>
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
    <v-input v-model="keywords" prepend="Http://" @suffix-click="handleSuffix">
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
    <v-input v-model="keywords" prepend="Http://" @suffix-click="handleSuffix">
      <template slot="append">
        <v-select v-model="select">
          <v-select-menu>
            <v-select-menu-option :label="item" :value="item" v-for="item in options"></v-select-menu-option>
          </v-select-menu>
        </v-select>
      </template>
    </v-input>
  </v-col>
  <v-col :span="12">
    <v-input v-model="keywords" suffix-icon="v-icon-calendar" @suffix-click="handleSuffix">
      <template slot="prepend">
        <v-select v-model="select">
          <v-select-menu>
            <v-select-menu-option :label="item" :value="item" v-for="item in options"></v-select-menu-option>
          </v-select-menu>
        </v-select>
      </template>
    </v-input>
  </v-col>
</v-row>
```
:::
    
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import Input from '@/components/input';
  import Button from '@/components/button';
  import Select from '@/components/select';
  import SelectMenu from '@/components/select-menu';
  import SelectMenuOption from '@/components/select-menu-option';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
      VInput: Input,
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
<style rel="stylesheet/scss" lang="sass" scoped>

</style>