<template>
 	<div :class="[
 		'v-row' + gridType
 	]"
 	></div>
</template>
<script>
  export default {
    name: 'Row',
    props: {
    	type: {
    		type: String,
        default: '',
    	}
    },
    computed: {
    	gridType() {
    		return this.type ? this.type : ''
    	},
    },
    methods: {
    },
  };
</script>
