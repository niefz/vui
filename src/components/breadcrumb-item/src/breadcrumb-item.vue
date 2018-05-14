<template>
  <span class="v-breadcrumb--item">
    <a class="v-breadcrumb--inner" ref="link" role="link">
      <slot></slot>
    </a><em class="v-breadcrumb--separator">
      <Icon :icon="separatorIcon" v-if="separatorIcon"></Icon>
      <i role="presentation" v-else>{{ separator }}</i>
    </em>
  </span>
</template>
<script>
  import Icon from 'free-vui/src/components/icon';

  export default {
    name: 'BreadcrumbItem',
    componentName: 'BreadcrumbItem',
    inject: ['breadcrumb'],
    components: {
      Icon,
    },
    props: {
      to: {},
      replace: Boolean,
    },
    data() {
      return {
        separator: '',
        separatorIcon: '',
      };
    },
    mounted() {
      this.separator = this.breadcrumb.separator;
      this.separatorIcon = this.breadcrumb.separatorIcon;

      const self = this;
      const to = self.to;

      if (to) {
        const link = this.$refs.link;
        link.addEventListener('click', () => {
          self.replace ? self.$router.replace(to) : self.$router.push(to);
        });
      }
    },
  };
</script>
