<template>
  <article ref="article" class="markdown">
    <h1>Button 按钮</h1>
    <p>基础组件，用于常用的按钮操作。</p>
    <h2>代码示例</h2>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
          <v-button type="button" shape="radius" theme="default">Default</v-button>
          <v-button type="button" shape="radius" theme="primary">Primary</v-button>
          <v-button type="button" shape="radius" theme="warning">Warning</v-button>
          <v-button type="button" shape="radius" theme="danger">Danger</v-button>
        </div>
        <div class="v-row">
          <v-button type="button" shape="radius" theme="default" disabled>Default</v-button>
          <v-button type="button" shape="radius" theme="primary" disabled>Primary</v-button>
          <v-button type="button" shape="radius" theme="warning" disabled>Warning</v-button>
          <v-button type="button" shape="radius" theme="danger" disabled>Danger</v-button>
        </div>
        <div class="v-row">
          <v-button type="button" shape="radius" theme="default" plain>Default</v-button>
          <v-button type="button" shape="radius" theme="primary" plain>Primary</v-button>
          <v-button type="button" shape="radius" theme="warning" plain>Warning</v-button>
          <v-button type="button" shape="radius" theme="danger" plain>Danger</v-button>
        </div>
        <div class="v-row">
          <v-button type="button" shape="radius" theme="default" plain disabled>Default</v-button>
          <v-button type="button" shape="radius" theme="primary" plain disabled>Primary</v-button>
          <v-button type="button" shape="radius" theme="warning" plain disabled>Warning</v-button>
          <v-button type="button" shape="radius" theme="danger" plain disabled>Danger</v-button>
        </div>
      </div>
      <div class="v-divide"></div>
      <div class="example-code v-col-xl-12">
      </div>
    </div>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
          <v-button type="text" shape="radius" theme="default">Default</v-button>
          <v-button type="text" shape="radius" theme="primary">Primary</v-button>
          <v-button type="text" shape="radius" theme="warning">Warning</v-button>
          <v-button type="text" shape="radius" theme="danger">Danger</v-button>
        </div>
        <div class="v-row">
          <v-button type="text" shape="radius" theme="default" disabled>Default</v-button>
          <v-button type="text" shape="radius" theme="primary" disabled>Primary</v-button>
          <v-button type="text" shape="radius" theme="warning" disabled>Warning</v-button>
          <v-button type="text" shape="radius" theme="danger" disabled>Danger</v-button>
        </div>
      </div>
    </div>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
          <v-button-group>
            <v-button type="button" shape="radius" theme="primary" prefix-icon="v-icon-arrow-left">上一页</v-button>
            <v-button type="button" shape="radius" theme="primary" suffix-icon="v-icon-more"></v-button>
            <v-button type="button" shape="radius" theme="primary" suffix-icon="v-icon-arrow-right">下一页</v-button>
          </v-button-group>
        </div>
      </div>
    </div>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
          <v-button type="button" shape="circle" theme="primary" prefix-icon="v-icon-message"></v-button>
          <v-button type="button" shape="circle" theme="default" prefix-icon="v-icon-message"></v-button>
          <v-button type="button" shape="circle" theme="warning" prefix-icon="v-icon-message"></v-button>
          <v-button type="button" shape="circle" theme="danger" prefix-icon="v-icon-message"></v-button>
        </div>
        <div class="v-row">
          <v-button type="button" shape="circle" theme="primary" prefix-icon="v-icon-message" disabled></v-button>
          <v-button type="button" shape="circle" theme="default" prefix-icon="v-icon-message" disabled></v-button>
          <v-button type="button" shape="circle" theme="warning" prefix-icon="v-icon-message" disabled></v-button>
          <v-button type="button" shape="circle" theme="danger" prefix-icon="v-icon-message" disabled></v-button>
        </div>
      </div>
    </div>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
          <v-button-group>
            <v-button type="button" shape="radius" theme="default">Default</v-button>
            <v-button type="button" shape="radius" theme="default">Primary</v-button>
            <v-button type="button" shape="radius" theme="default">Warning</v-button>
            <v-button type="button" shape="radius" theme="default">Danger</v-button>
            <v-button type="button" shape="radius" theme="default" prefix-icon="v-icon-more"></v-button>
          </v-button-group>
        </div>
        <div class="v-row">
          <v-button-group>
            <v-button type="button" shape="radius" theme="default" disabled>Default</v-button>
            <v-button type="button" shape="radius" theme="default" disabled>Primary</v-button>
            <v-button type="button" shape="radius" theme="default" disabled>Warning</v-button>
            <v-button type="button" shape="radius" theme="default" disabled>Danger</v-button>
            <v-button type="button" shape="radius" theme="default" prefix-icon="v-icon-more" disabled></v-button>
          </v-button-group>
        </div>
        <div class="v-row">
          <v-button-group mode="vertical">
            <v-button type="button" shape="radius" theme="default">Default</v-button>
            <v-button type="button" shape="radius" theme="default">Primary</v-button>
            <v-button type="button" shape="radius" theme="default">Warning</v-button>
            <v-button type="button" shape="radius" theme="default">Danger</v-button>
            <v-button type="button" shape="radius" theme="default" prefix-icon="v-icon-more"></v-button>
          </v-button-group>
        </div>
      </div>
    </div>
    <h2>属性值</h2>
    <p>Button props</p>
  </article>
</template>