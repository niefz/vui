<template>
  <div class="v-datetimepicker">
    <div
      class="v-input"
      :class="[
        {
          'v-input__prefix': prefixIcon,
          'v-input__suffix': suffixIcon,
         }
      ]">
      <input
        v-model="datetime"
        class="v-input__inner"
        :class="[
          'v-input__' + inputSize,
          {
            'readonly': readonly,
            'disabled': disabled,
          }
         ]"
        type="text"
        name="datetime"
        :placeholder="placeholders">
      <v-icon class="v-input__prefix-icon" :icon="prefixIcon" v-if="prefixIcon"></v-icon>
      <v-icon class="v-input__suffix-icon" :icon="suffixIcon" v-if="suffixIcon"></v-icon>
    </div>
    <div class="v-datetimepicker__content">
      <v-picker-date></v-picker-date>
      <v-picker-time></v-picker-time>
    </div>
  </div>
</template>
<script>
  import Icon from '@/components/icon';
  import PickerDate from './picker-date.vue';
  import PickerTime from './picker-time.vue';

  export default {
    name: 'DateTimePicker',
    componentName: 'DateTimePicker',
    components: {
      VIcon: Icon,
      VPickerDate: PickerDate,
      VPickerTime: PickerTime,
    },
    data() {
      return {
        datetime: null,
      };
    },
    props: {
      type: {
        type: String,
        default: 'date',
      },
      size: {
        type: String,
        default: 'small',
      },
      placeholder: {
        type: String,
        default: '',
      },
      readonly: Boolean,
      disabled: Boolean,
      prefixIcon: {
        type: String,
        default: '',
      },
      suffixIcon: {
        type: String,
        default: '',
      },
    },
    computed: {
      inputSize() {
        return this.size || (this.$VUI || {}).size;
      },
      placeholders() {
        return this.placeholder || '选择日期';
      },
    },
  };
</script>
