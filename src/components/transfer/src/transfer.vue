<template>
  <div 
    class="v-transfer" 
    :class="[
      {
      }
    ]"
  >
    <TransferPanel
      v-bind="$props"
      :data="sourceData"
      :title="titles[0]"
    ></TransferPanel>
    <div class="v-transfer--middle">
      <Button shape="circle" prefix-icon="v-icon-user-plus-o" @click="moveLeft"></Button>
      <Button shape="circle" prefix-icon="v-icon-user-plus-o" @click="moveRight"></Button>
    </div>
    <TransferPanel
      v-bind="$props"
      :data="targetData"
      :title="titles[1]"
    ></TransferPanel>
  </div>
</template>
<script>
  import Icon from '@/components/icon';
  import Button from '@/components/button';
  import TransferPanel from '@/components/transfer/src/transfer-panel';
  export default {
    name: 'Transfer',
    componentName: 'Transfer',
    components: {
      Icon,
      Button,
      TransferPanel
    },
    inheritAttrs: false,
    props: {
      titles: {
        type: Array,
        default() {
          return ['', ''];
        },
      },
      value: {
        type: Array,
        default() {
          return [];
        }
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      },
      props: {
        type: Object,
        default() {
          return {
            label: 'label',
            key: 'key',
            disabled: 'disabled'
          };
        }
      },
    },
    data() {
      return {};
    },
    computed: {
      sourceData() {
        return this.data.filter(item => this.value.indexOf(item[this.props.key]) === -1);
      },
      targetData() {
        return this.data.filter(item => this.value.indexOf(item[this.props.key]) > -1);
      },
    },
    watch: {
    },
    methods: {
      moveLeft() {},
      moveRight() {},
    },
    created() {
    },
    mounted() {
    },
  };
</script>