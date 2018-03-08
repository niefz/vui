<template>
  <div>
    <h1>Button<span class="subtitle">按钮</span></h1>
    <div class="v-row">
      <v-button-group>
        <v-button
          type="button"
          shape="radius"
          theme="primary">
          Primary
        </v-button>
        <v-button
          type="button"
          shape="radius"
          theme="default">
          Default
        </v-button>
        <v-button
          type="button"
          shape="radius"
          theme="warning">
          Warning
        </v-button>
        <v-button
          type="button"
          shape="radius"
          theme="danger">
          Danger
        </v-button>
      </v-button-group>
    </div>
    <div class="v-row">
      <v-button-group>
        <v-button
          type="button"
          shape="radius"
          theme="primary"
          disabled>
          Primary
        </v-button>
        <v-button
          type="button"
          shape="radius"
          theme="default"
          disabled>
          Default
        </v-button>
        <v-button
          type="button"
          shape="radius"
          theme="warning"
          disabled>
          Warning
        </v-button>
        <v-button
          type="button"
          shape="radius"
          theme="danger"
          disabled>
          Danger
        </v-button>
      </v-button-group>
    </div>
    <div class="v-row">
      <v-button-group>
        <v-button
          type="text"
          shape="radius"
          theme="primary">
          Primary
        </v-button>
        <v-button
          type="text"
          shape="radius"
          theme="default">
          Default
        </v-button>
        <v-button
          type="text"
          shape="radius"
          theme="warning">
          Warning
        </v-button>
        <v-button
          type="text"
          shape="radius"
          theme="danger">
          Danger
        </v-button>
      </v-button-group>
    </div>
    <div class="v-row">
      <v-button-group>
        <v-button
          type="text"
          shape="radius"
          theme="primary"
          disabled>
          Primary
        </v-button>
        <v-button
          type="text"
          shape="radius"
          theme="default"
          disabled>
          Default
        </v-button>
        <v-button
          type="text"
          shape="radius"
          theme="warning"
          disabled>
          Warning
        </v-button>
        <v-button
          type="text"
          shape="radius"
          theme="danger"
          disabled>
          Danger
        </v-button>
      </v-button-group>
    </div>
    <div class="v-row">
      <v-button-group>
        <v-button
          type="button"
          shape="circle"
          theme="primary">
          <i class="v-icon v-icon-message"></i>
        </v-button>
        <v-button
          type="button"
          shape="circle"
          theme="default">
        </v-button>
        <v-button
          type="button"
          shape="circle"
          theme="warning">
        </v-button>
        <v-button
          type="button"
          shape="circle"
          theme="danger">
        </v-button>
      </v-button-group>
    </div>
  </div>
</template>
<script>
  import Button from '@/components/button';
  import ButtonGroup from '@/components/button-group';

  export default {
    components: {
      VButton: Button,
      VButtonGroup: ButtonGroup,
    },
  };
</script>
<style rel="stylesheet/scss" lang="sass" scoped>
  .v-row {
    margin-bottom: 10px;
  }
</style>