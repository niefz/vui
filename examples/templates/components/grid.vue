<template>
  <v-row>
    <v-row flex>
      <v-col :span="12"></v-col>
      <v-col :span="4"></v-col>
    </v-row>
    <v-row>
      <v-col></v-col>
    </v-row>
  </v-row>
</template>
<script>
  import Row from '@/components/row';
  import Col from '@/components/col';

  export default {
    components: {
      VRow: Row,
      VCol: Col,
    },
  };
</script>