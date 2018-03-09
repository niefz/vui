<template>
  <article ref="article" class="markdown">
    <h1>Button<span class="subtitle">按钮</span></h1>
    <p>基础组件，用于常用的按钮操作。</p>
    <h2>代码示例</h2>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
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
        </div>
        <div class="v-row">
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
        </div>
      </div>
      <div class="v-divide"></div>
      <div class="example-code v-col-xl-12">
        <!--<pre>-->
          <!--&lt;template&gt;-->
            <!--&lt;div class="v-row"&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="primary"&gt;-->
                <!--Primary-->
              <!--&lt;/v-button&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="default"&gt;-->
                <!--Default-->
              <!--&lt;/v-button&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="warning"&gt;-->
                <!--Warning-->
              <!--&lt;/v-button&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="danger"&gt;-->
                <!--Danger-->
              <!--&lt;/v-button&gt;-->
            <!--&lt;/div&gt;-->
            <!--&lt;div class="v-row"&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="primary"-->
                <!--disabled&gt;-->
                <!--Primary-->
              <!--&lt;/v-button&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="default"-->
                <!--disabled&gt;-->
                <!--Default-->
              <!--&lt;/v-button&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="warning"-->
                <!--disabled&gt;-->
                <!--Warning-->
              <!--&lt;/v-button&gt;-->
              <!--&lt;v-button-->
                <!--type="button"-->
                <!--shape="radius"-->
                <!--theme="danger"-->
                <!--disabled&gt;-->
                <!--Danger-->
              <!--&lt;/v-button&gt;-->
            <!--&lt;/div&gt;-->
          <!--&lt;/template&gt;-->
        <!--</pre>-->
      </div>
    </div>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
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
        </div>
        <div class="v-row">
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
        </div>
      </div>
    </div>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
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
        </div>
        <div class="v-row">
          <v-button
            type="button"
            shape="circle"
            theme="primary"
            disabled>
            <i class="v-icon v-icon-message"></i>
          </v-button>
          <v-button
            type="button"
            shape="circle"
            theme="default"
            disabled>
          </v-button>
          <v-button
            type="button"
            shape="circle"
            theme="warning"
            disabled>
          </v-button>
          <v-button
            type="button"
            shape="circle"
            theme="danger"
            disabled>
          </v-button>
        </div>
      </div>
    </div>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
          <v-button-group>
            <v-button
              type="button"
              shape="radius"
              theme="default">
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
              theme="default">
              Warning
            </v-button>
            <v-button
              type="button"
              shape="radius"
              theme="default">
              Danger
            </v-button>
          </v-button-group>
        </div>
        <div class="v-row">
          <v-button-group>
            <v-button
              type="button"
              shape="radius"
              theme="default"
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
              theme="default"
              disabled>
              Warning
            </v-button>
            <v-button
              type="button"
              shape="radius"
              theme="default"
              disabled>
              Danger
            </v-button>
          </v-button-group>
        </div>
      </div>
    </div>
    <h2>属性值</span></h2>
    <p>Button props</p>
  </article>
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
  .v-row + .v-row {
    margin-top: 10px;
  }
</style>