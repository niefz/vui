<template>
  <article ref="article" class="markdown">
    <h1>Icon 图标</h1>
    <p>基础组件，提供了一套常用的图标集合。</p>
    <h2>代码示例</h2>
    <div class="example v-row">
      <div class="example-demo v-col-xl-12">
        <div class="v-row">
          <v-icon icon="v-icon-calendar"></v-icon>
          <v-icon icon="v-icon-delete"></v-icon>
          <v-icon icon="v-icon-message"></v-icon>
          <v-icon icon="v-icon-loading"></v-icon>
        </div>
      </div>
    </div>
    <h2>图标集合</h2>
  </article>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    components: {
      VIcon: Icon,
    },
  };
</script>