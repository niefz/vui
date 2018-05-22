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
      @change="handleChange"
    ></input>
  </div>
</template>
<script>
  import httpRequest from './httpRequest.js';
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
      autoUpload: {
        type: Boolean,
        default: true,
      },
      data: Object,
      headers: Object,
      multiple: Boolean,
      onStart: Function,
      onProgress: Function,
      onSuccess: Function,
      onError: Function,
      onChange: Function,
      accept: String,
      httpRequest: {
        type: Function,
        default: httpRequest
      },
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
      handleChange(e) {
        const files = e.target.files;
        if(!files) return;
        this.getFiles(files);
      },
      getFiles(files) {
        console.log(files);
        let resultFiles = [...files];

        resultFiles.forEach(file => {
          this.handleStart(file);
          if(this.autoUpload) {
            this.upload(file);
          }
        })
      },
      handleStart(file) {
        this.onStart(file);
      },
      handleSuccess(res, file) {
        this.onSuccess(res, file);
        // this.onChange(res, file);
      },
      handleProcess(e, file) {
        // this.onProgress(e, file);
      },
      handleError(err, file) {
        this.onError(err, file);
        // this.onChange(file);
      },
      upload(file) {
        this.$refs['input'].value = null;

        const { uid } = file;
        const options = {
          headers: this.headers,
          withCredentials: this.withCredentials,
          file: file,
          data: this.data,
          filename: this.name,
          action: this.action,
          onProgress: e => {
            this.handleProcess(e, file);
          },
          onSuccess: res => {
            this.handleSuccess(res, file);
          },
          onError: err => {
            this.handleError(err, file);
          }
        };
        this.httpRequest(options);
      },
    },
    created() {
    },
    mounted() {
    },
  };
</script>
