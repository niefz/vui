<template>
  <ul
    v-if="files.length > 0"
    class="v-upload--list"
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
        'v-upload--list-item'
      ]"
    >
      <a class="v-upload--list-item-label">{{item.name}}</a>
      <Icon icon="v-icon-close-o" class="v-upload--list-item--del" @click="handleRemove(item)"></Icon>
      <Progress :percentage="getPercentage(item)"></Progress>
    </li>
  </ul>
</template>
<script>
  import Progress from 'free-vui/src/components/progress-bar';
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'UploadList',
    components: {
      Progress,
      Icon,
    },
    inheritAttrs: false,
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
    created() {
    },
    mounted() {
    },
    methods: {
      getPercentage(file) {
        return file.percent;
      },
      handleRemove(file) {
        this.$emit('remove', file);
      },
    },
  };
</script>
