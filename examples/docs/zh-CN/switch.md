# Switch 开关

用于开启关闭。

## 基础用法

:::demo 在 v-switch 元素中定义 v-model 绑定变量

```html
<v-row>
  <v-switch v-model="checked"></v-switch>
</v-row>
```
:::

<script>
  import Row from '@/components/row';
  import Switch from '@/components/switch';

  export default {
    components: {
      VRow: Row,
      VSwitch: Switch,
    },
    data() {
      return {
        checked: false
      };
    },
    methods: {
    },
  };
</script>