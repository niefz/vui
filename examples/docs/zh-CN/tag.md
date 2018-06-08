# Tag 标签

进行标记和分类的小标签。

## 何时使用

- 用于标记事物的属性和维度。
- 进行分类。

## 基本用法

:::demo 基本标签的用法，可以通过添加 `closable` 变为可关闭标签。

```html
<Row>
  <Col>
    <Tag>标签一</Tag>
    <Tag
      closable
      @close="handleClose(tag)"
      :key="tag"
      v-for="tag in dynamicTags">
      {{tag}}
    </Tag>
  </Col>
</Row>
```
:::

## 多彩标签

:::demo 预设多种色彩的标签样式，用作不同场景使用。如果预设值不能满足你的需求，可以设置为具体的色值。

```html
<Row>
  <Col>Presets:</Col>
</Row>
<Row>
  <Col>
    <Tag>Default</Tag>
    <Tag theme="success">Success</Tag>
    <Tag theme="info">Info</Tag>
    <Tag theme="warning">Warning</Tag>
    <Tag theme="danger">Danger</Tag>
  </Col>
</Row>
<Row>
  <Col>Custom:</Col>
</Row>
<Row>
  <Col>
    <Tag background-color="#FF5500">FF5500</Tag>
  </Col>
</Row>
```
:::

## 标签组 - 单选

:::demo 类似 Radio 的效果。

```html
<Row>
  <Col>
    <TagGroup v-model="single">
      <Tag
        :value="tag"
        theme="text"
        :key="tag"
        v-for="tag in tags">
      </Tag>
    </TagGroup>
  </Col>
</Row>
```
:::

## 标签组 - 多选

:::demo 可通过 `multiple` 实现类似 Checkbox 的效果，点击切换选中。

```html
<Row>
  <Col>
    <TagGroup v-model="multiple" multiple>
      <Tag
        :value="tag"
        theme="text"
        :key="tag"
        v-for="tag in tags">
      </Tag>
    </TagGroup>
  </Col>
</Row>
```
:::

## API

Tag props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| transitionName | 出现和消失时使用渐变的动画 | string | - | zoom-in-center |
| value | 当前标签的名称 | string \/ object | - | - |
| theme | 标签的样式类型 | string | `text` `default` `info` `success` `warning` `danger` | default |
| size | 标签大小 | string | `mini` `small` `medium` `large` | small |
| border-color | 标签边框色 | string | - | - |
| background-color | 标签背景色 | string | - | - |
| closable | 标签是否可以关闭 | boolean | - | false |

Tag events

| 事件名 | 说明 | 返回值 |
|---- |---- |---- |
| close | 关闭时触发 | name, event |

TagGroup props

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---- |---- |---- |---- |---- |
| multiple | 是否多选 | boolean | - | false |

<script>
  import Row from '@/components/row';
  import Col from '@/components/col';
  import TagGroup from '@/components/tag-group';
  import Tag from '@/components/tag';

  export default {
    components: {
      Row,
      Col,
      Tag,
      TagGroup,
    },
    data() {
      return {
        model: '标签一',
        single: '对开门',
        multiple: ['多门'],
        tags: ['多门', '对开门', '三门', '双门', '单门'],
        dynamicTags: ['标签二', '标签三'],
      };
    },
    methods: {
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      handleChange(val) {
        this.single = val;
      },
      handleMultipleChange(val) {
        this.multiple = val;
      },
    },
  };
</script>