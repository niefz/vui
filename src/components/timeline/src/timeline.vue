<template>
  <ul 
    class="v-timeline" 
    :class="[
      {
        ['pending']: isPending,
        ['reverse']: isReverse
      }
    ]"
  >
    <slot v-if="!isReverse"></slot>
    <TimelineItem v-if="isPending">
      {{this.pending}}
      <Icon icon="v-icon-loading" slot="itemIcon" class="v-timeline-icon"></Icon>
    </TimelineItem>
    <slot v-if="isReverse"></slot>
  </ul>
</template>
<script>
  import TimelineItem from '@/components/timeline-item';
  import Icon from '@/components/icon';

  export default {
    name: 'Timeline',
    components: {
      TimelineItem,
      Icon,
    },
    inheritAttrs: false,
    props: {
      pending: {
        type: String,
      },
      reverse: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {};
    },
    computed: {
      isPending() {
        return !!this.pending;
      },
      isReverse() {
        return this.reverse;
      },
    },
    watch: {
    },
    created() {
    },
    mounted() {
    },
    methods: {
    },
  };
</script>