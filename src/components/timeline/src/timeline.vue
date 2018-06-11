<template>
  <ul 
    class="v-timeline" 
    :class="[
      {
        ['pending']: isPending
      }
  ]">
    <slot></slot>
    <TimelineItem v-if="isPending">
      {{this.pending}}
      <Icon icon="v-icon-loading" slot="itemIcon" class="default-icon"></Icon>
    </TimelineItem>
  </ul>
</template>
<script>
  import TimelineItem from '@/components/timeline-item';
  import Icon from '@/components/icon';
  export default {
    name: 'Timeline',
    componentName: 'Timeline',
    components: {
      TimelineItem,
      Icon,
    },
    inheritAttrs: false,
    props: {
      pending: {
        type: String,
      },
    },
    data() {
      return {};
    },
    computed: {
      isPending() {
        return !!this.pending;
      },
    },
    watch: {
    },
    methods: {
    },
    created() {
    },
    mounted() {
    },
  };
</script>