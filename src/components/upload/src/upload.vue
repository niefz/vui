<template>
  <div
    class="v-upload"
    :class="[
      {
        ['disabled']: isDisabled
      }
    ]"
  >
    <div @click="handleClick">
      <slot></slot>
      <input
        class="v-upload--input"
        type="file" 
        ref="input" 
        :name="name"
        :multiple="multiple" 
        :accept="accept"
        @change="handleChange"/>
    </div>
    <UploadList :files="getUploadList" :disabled="isDisabled" @remove="handleRemove"></UploadList>
  </div>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';
  import UploadList from './upload-list.vue';
  import httpRequest from './httpRequest.js';

  export default {
    name: 'Upload',
    components: {
      Icon,
      UploadList,
    },
    inheritAttrs: false,
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
      fileList: {
        type: Array,
        default() {
          return [];
        },
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
        uploadList: []
      };
    },
    computed: {
      isDisabled() {
        return this.disabled;
      },
      getUploadList() {
        return this.uploadList;
      },
    },
    watch: {
      fileList: {
        immediate: true,
        handler(fileList) {
          this.uploadList = fileList.map(item => {
            item.uid = item.uid || (new Date().getTime() + Math.random());
            return item;
          });
        }
      },
    },
    created() {
    },
    mounted() {
    },
    methods: {
      delItemByUid(uid) {
        this.uploadList.forEach((item, index) => {
          if(item.uid === uid) {
            this.uploadList.splice(index, 1);
          }
        });
      },
      handleRemove(file) {
        console.log('remove', file);
        this.delItemByUid(file.uid);
      },
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
        file.uid = new Date().getTime() + Math.random();
        let fileData = {
          status: 3, // 0:fail, 1:success, 2:process, 3: init
          name: file.name,
          size: file.size,
          percent: 0,
          raw: file,
          uid: file.uid,
        };
        this.uploadList.push(fileData);
        this.onStart(file);
      },
      handleSuccess(res, file) {
        console.log('onSuccess', file);
        this.onSuccess(res, file);
        // this.onChange(res, file);
      },
      handleProcess(e, file) {
        // this.onProgress(e, file);
        console.log('onProgress', e.percent, file);
        file.percent = e.percent;
      },
      handleError(err, file) {
        console.log('onError');
        this.delItemByUid(file.uid);
        this.onError(err, file);
        // this.onChange(file);
      },
      upload(file) {
        this.$refs['input'].value = null;

        const { uid } = file;
        let fileData = this.uploadList.filter((v) => {
          return v.uid === uid;
        });
        if (!fileData || !fileData[0]) {
          return;
        }
        fileData = fileData[0];
        const options = {
          headers: this.headers,
          withCredentials: this.withCredentials,
          file: fileData.raw,
          data: this.data,
          filename: this.name,
          action: this.action,
          onProgress: e => {
            this.handleProcess(e, fileData);
          },
          onSuccess: res => {
            this.handleSuccess(res, fileData);
          },
          onError: err => {
            this.handleError(err, fileData);
          }
        };
        this.httpRequest(options);
      },
    },
  };
</script>
