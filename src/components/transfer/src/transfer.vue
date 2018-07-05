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
      :default-checked="leftDefaultChecked"
      @checked-change="handleSourceCheckedChange"
    ></TransferPanel>
    <div class="v-transfer--middle">
      <Button shape="circle" prefix-icon="v-icon-user-plus-o" @click="moveRight"></Button>
      <Button shape="circle" prefix-icon="v-icon-user-plus-o" @click="moveLeft"></Button>
    </div>
    <TransferPanel
      v-bind="$props"
      :data="targetData"
      :title="titles[1]"
      :default-checked="rightDefaultChecked"
      @checked-change="handleTargetCheckedChange"
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
      leftDefaultChecked: {
        type: Array,
        default() {
          return [];
        }
      },
      rightDefaultChecked: {
        type: Array,
        default() {
          return [];
        }
      },
    },
    data() {
      return {
        sourceChecked: [],
        targetChecked: [],
      };
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
      moveLeft() {
        let currentValue = this.value.slice();
        this.targetChecked.forEach(item => {
          const index = currentValue.indexOf(item);
          if (index > -1) {
            currentValue.splice(index, 1);
          }
        });
        this.$emit('input', currentValue);
        this.$emit('change', currentValue, 'left', this.targetChecked);
      },
      moveRight() {
        let currentValue = this.value.slice();
        const itemsToBeMoved = [];
        const key = this.props.key;
        this.data.forEach(item => {
          const itemKey = item[key];
          if (
            this.sourceChecked.indexOf(itemKey) > -1 &&
            this.value.indexOf(itemKey) === -1
          ) {
            itemsToBeMoved.push(itemKey);
          }
        });
        currentValue = currentValue.concat(itemsToBeMoved);
        this.$emit('input', currentValue);
        this.$emit('change', currentValue, 'right', this.sourceChecked);
      },
      handleSourceCheckedChange(val) {
        this.sourceChecked = val;
      },
      handleTargetCheckedChange(val) {
        this.targetChecked = val;
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>