<template>
  <div>
    <p>
      <v-date-time-picker
        v-model="date"
        type="date"
        suffix-icon="v-icon-calendar">
      </v-date-time-picker>
    </p>
  </div>
</template>
<script>
  import DateTimePicker from '@/components/datetimepicker';

  export default {
    components: {
      VDateTimePicker: DateTimePicker,
    },
    data() {
      return {
        date: new Date(),
      };
    },
  };
</script>