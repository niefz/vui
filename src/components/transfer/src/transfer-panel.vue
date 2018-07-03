<template>
  <div 
    class="v-transfer--panel" 
    :class="[
      {
      }
    ]"
  >
  <div class="v-transfer--panel--header">
  	<Checkbox v-model="isAllChecked" @change="handleAllCheckedChange">{{ headerTitle }} {{ allCheckedSummary }}</Checkbox>
  </div>
  <div class="v-transfer--panel--body">
  	<CheckboxGroup v-model="isChecked">
      <Checkbox v-for="item, index in filteredCheckboxData" :key="index" :label="item[label]"></Checkbox>
    </CheckboxGroup>
  </div>
  <div class="v-transfer--panel--footer">
  	
  </div>
  </div>
</template>
<script>
  import Icon from '@/components/icon';
  import CheckboxGroup from '@/components/checkbox-group';
  import Checkbox from '@/components/checkbox';
  export default {
    name: 'TransferPanel',
    componentName: 'TransferPanel',
    components: {
      Icon,
      Checkbox,
      CheckboxGroup,
    },
    inheritAttrs: false,
    props: {
    	data: {
    		type: Array,
    		default() {
    			return [];
    		}
    	},
    	label: {
    		type: String,
    		default: 'label'
    	},
    	key: {
    		type: String,
    		default: 'key'
    	}
    },
    data() {
      return {
      	isAllChecked: false,
      	isChecked: false,
      	query: ''
      };
    },
    computed: {
    	filteredCheckboxData() {
    		return this.data.filter(item => {
    			const label = item[this.label] || item[this.key].toString();
          return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    		})
    	},
    },
    watch: {
    },
    methods: {
    	handleAllCheckedChange(value) {
    	},
    },
    created() {
    },
    mounted() {
    },
  };
</script>