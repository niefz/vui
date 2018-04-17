<template>
	<em class="v-anchor--ink-ball" :style="ballStyle"></em>
</template>
<script>
	export default {
		name: 'AnchorBar',
		componentName: 'AnchorBar',
	    inject: ['anchor'],
	    props: {
	      links: Array,
	    },
	    computed: {
	      ballStyle: {
	        cache: false,
	        get() {
	          let style = {};
	          const link = this.links.filter(link => link.title === this.anchor.active)[0];
	          if (!link) return;
	          const el = link.$el;
	          const offset = el.offsetTop;
	          const transform = `translate(-50%, ${offset}px)`;
	          style.transform = transform;
	          style.msTransform = transform;
	          style.webkitTransform = transform;
	          return style;
	        },
	      },
	    },
	};
</script>