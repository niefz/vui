<template>
  <div 
    class="v-transfer--panel" 
    :class="[
      {
      }
    ]"
  >
  <div class="v-transfer--panel--header">
  	<Checkbox 
  		v-model="isAllChecked"
  		:indeterminate="isIndeterminate"
  		@change="handleAllCheckedChange"
  	>
  		{{ title }} {{ allCheckedSummary }}
  	</Checkbox>
  </div>
  <div class="v-transfer--panel--body">
  	<CheckboxGroup v-model="checkedData" mode="vertical" class="v-transfer--panel--body--list">
      <Checkbox 
      	v-for="item, index in filteredCheckboxData" 
      	:key="index" 
      	:label="item[label]"
      	:value="item[key]"
      	:disabled="item[isDisabled]"
      ></Checkbox>
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
    	title: String,
    	props: Object,
    	defaultChecked: Array,
    },
    data() {
      return {
      	isAllChecked: false,
      	checkedData: [],
      	query: ''
      };
    },
    computed: {
    	label() {
    		return this.props.label || 'label';
    	},
    	key() {
    		return this.props.key || 'key';
    	},
    	isDisabled() {
    		return this.props.disabled || 'disabled';
    	},
    	checkableData() {
        return this.filteredCheckboxData.filter(item => !item[this.isDisabled]);
      },
    	filteredCheckboxData() {
    		return this.data.filter(item => {
    			const label = item[this.label] || item[this.key].toString();
          return label.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
    		})
    	},
    	allCheckedSummary() {
    		const checkedDataLength = this.checkedData.length;
    		const dataLength = this.data.length;
    		return `${checkedDataLength}/${dataLength}`;
    	},
    	isIndeterminate() {
    		return this.checkedData.length > 0 && this.checkedData.length < this.checkableData.length;
    	},
    },
    watch: {
    	checkedData (val) {
    		this.updateAllChecked();
    		this.$emit('checked-change', val);
    	},
    },
    methods: {
    	updateAllChecked() {
    		const checkableDataKeys = this.checkableData.map(item => item[this.key]);
        this.isAllChecked = checkableDataKeys.length > 0 &&
          checkableDataKeys.every(item => this.checkedData.indexOf(item) > -1);
    	},
    	handleAllCheckedChange(value) {
    		this.checkedData = value ? this.checkableData.map(item => item[this.key]) : [];
    	},
    },
    created() {
    },
    mounted() {
    },
  };
</script>