<template>
  <div
    class="v-upload"
    :class="[
      {
        ['disabled']: isDisabled
      }
    ]"
    @click="handleClick"
  >
    <slot></slot>
    <input 
      class="v-upload__input" 
      type="file" 
      ref="input" 
      :name="name"
      :multiple="multiple" 
      :accept="accept"
    ></input>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'Upload',
    componentName: 'Upload',
    components: {
      Icon,
    },
    props: {
      disabled: {
        type: Boolean,
        default: false,
      },
      type: String,
      action: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        default: '',
      },
      data: Object,
      headers: Object,
      multiple: Boolean,
      onStart: Function,
      onProgress: Function,
      onSuccess: Function,
      onError: Function,
      accept: String,
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
      handleClick() {
        if (this.disabled) return;
        this.$refs['input'].click();
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
