<template>
  <ul
    class="v-upload__list"
    :class="[
      {
        ['disabled']: isDisabled
      }
    ]"
  >
    <li
      v-for="(item, index) in files"
      :key="index"
      :class="[
        'v-upload__list-item'
      ]"
      <a class="v-upload__list-item-label">{{item.name}}</a>
      <Icon name="close" @click="handleRemove(item)"></Icon>
      <Progress :percentage="getPercentage(item)"></Progress>
    ></li>
  </ul>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';
  import Progress from '@/components/Progress';

  export default {
    name: 'UploadList',
    componentName: 'UploadList',
    components: {
      Icon,
      Progress,
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      files: {
        type: Array,
        default() {
          return [];
        },
      },
      onRemove: Function,
      onPreview: Function,
    },
    data() {
      return {
      };
    },
    computed: {
      isDisabled() {
        return this.disabled;
      },
    },
    watch: {
    },
    methods: {
      getPercentage(file) {
        return parseInt(file.percentage, 10);
      },
      handleRemove(file) {
        this.$emit('remove', file);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
