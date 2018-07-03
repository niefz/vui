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
      :data="beforeData"
    ></TransferPanel>
    <div class="v-transfer--middle">
      
    </div>
    <TransferPanel
      v-bind="$props"
      :data="beforeData"
    ></TransferPanel>
  </div>
</template>
<script>
  import Icon from '@/components/icon';
  import TransferPanel from '@/components/transfer/src/transfer-panel';
  export default {
    name: 'Transfer',
    componentName: 'Transfer',
    components: {
      Icon,
      TransferPanel
    },
    inheritAttrs: false,
    props: {
    },
    data() {
      return {};
    },
    computed: {
      beforeData() {
        return [];
      }
    },
    watch: {
    },
    methods: {
    },
    created() {
    },
    mounted() {
    },
  };
</script>