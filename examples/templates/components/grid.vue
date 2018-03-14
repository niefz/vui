<template>
  <article ref="article" class="markdown">
    <h1>Grid 栅格</h1>
    <v-row>
      <v-col :span="12">col-12</v-col>
      <v-col :span="12">col-12</v-col>
    </v-row>
    <v-row>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8">col-8</v-col>
      <v-col :span="8">col-8</v-col>
    </v-row>
    <v-row>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
      <v-col :span="6">col-6</v-col>
    </v-row>
  </article>
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
<style rel="stylesheet/scss" lang="sass" scoped>
.v-row, .v-row__flex {
  > div {
    min-height: 30px;
    margin-top: 8px;
    margin-bottom: 8px;
    padding: 16px 0;
    background-color: #43A5F8;
    color: #FFFFFF;
    text-align: center;
    &:nth-child(odd) {
      background-color: #148EF6;
    }
  }
}
</style>