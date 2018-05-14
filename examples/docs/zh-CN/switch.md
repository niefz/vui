# Switch 开关

用于开启关闭。

## 基础用法

:::demo 在 Switch 元素中定义 v-model 绑定变量

```html
<Row>
  <Switch v-model="checked" :before-switch="beforeSwitch"></Switch>
</Row>
<Row>
  <Switch v-model="checkDisabled" disabled></Switch>
</Row>
```
:::

<script>
  import Row from '@/components/row';
  import Switch from '@/components/switch';

  export default {
    components: {
      Row,
      Switch,
    },
    data() {
      return {
        checked: false,
        checkDisabled: true,
      };
    },
    methods: {
      beforeSwitch(callback) {
        console.log(this.checked);
        callback();
      },
    },
  };
</script>