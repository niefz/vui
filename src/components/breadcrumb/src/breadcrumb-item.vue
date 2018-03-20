<template>
  <span class="v-breadcrumb__item">
    <a class="v-breadcrumb__inner" ref="link" role="link">
      <slot></slot>
    </a><em class="v-breadcrumb__separator">
      <v-icon :icon="separatorIcon" v-if="separatorIcon"></v-icon>
      <i role="presentation" v-else>{{ separator }}</i>
    </em>
  </span>
</template>
<script>
  import Icon from '@/components/icon';

  export default {
    name: 'VBreadcrumbItem',
    components: {
      VIcon: Icon,
    },
    props: {
      to: {},
      replace: Boolean,
    },
    data() {
      return {
        separator: '',
        separatorIcon: ''
      };
    },
    inject: ['VBreadcrumb'],
    mounted() {
      this.separator = this.VBreadcrumb.separator;
      this.separatorIcon = this.VBreadcrumb.separatorIcon;

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
